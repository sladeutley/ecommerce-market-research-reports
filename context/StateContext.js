//Here, we're going to manage the entire state of our application.
import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast' //this is pop up notification whenever add something to cart, remove it, or finish an order

const Context = createContext();

export const StateContext = ({ children }) => { //children is an important prop that means whenver we call our state context like <State> {children} </State> , whatever we pass into it is considered children, and we can render it out
  //below, there are going to be a lot of different states used in context
  const [showCart, setShowCart] = useState(false) //we are not currently showing that cart to when we are
  const [cartItems, setCartItems] = useState() //we always need to know what items we have in our cart. Going to use local storage as well for this
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState()
  const [qty, setQty] = useState(1) //to change quanity for each individual item

  const onAdd = (product, quantity) => {
    //check if product is already in cart
    const checkProductInCart = cartItems.find((items) => items._id === product._id)

    if (checkProductInCart) {
      //Below is updating our state I think
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
      //***Above, have no idea how we're getting prevTotalPrice or prevTotalQuantities - perhaps it's just a parameter and this is not calling the function, but we wiill do that later

      //update the actual items in cart
      const updatedCartItems = cartItems.map((cartProduct) => { //udate if already exists in cart
        if (cartProduct._id === product._id) return { //return new object
          ...cartProduct, //spread cartProduct - *not sure what this is doing, is this just duplicating cartProduct? is cartProduct an array or object
          quantity: cartProduct.quantity + quantity //update quantity
        }
      })

      setCartItems(updatedCartItems)
      toast.success(`{qty} ${product.name} added to the cart.`)
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty -1 < 1) return 1; //bc can't go lower than 1
      return prevQty - 1
    })
  }

  //create our context provide. Below means we are not rendering anything, we are just wrapping everything with our context provider, and we're going to pass some values to it
  return (
    <Context.Provider
      value={{ //below pass values of all of our state fields. This makes it so we'll be able to access the values from these states in any one of our components. But to app that happen we will have to wrap entire app with state context in _app.js
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty
      }}
    >
      {children}
    </Context.Provider>
  )
}

//below, special function that allows us to more easily grab the state, essentially being like a hook
export const useStateContext = () => useContext(Context)