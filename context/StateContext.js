//Here, we're going to manage the entire state of our application.
import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast' //this is pop up notification whenever add something to cart, remove it, or finish an order

const Context = createContext();

export const StateContext = ({ children }) => { //children is an important prop that means whenver we call our state context like <State> {children} </State> , whatever we pass into it is considered children, and we can render it out
  //below, there are going to be a lot of different states used in context
  const [showCart, setShowCart] = useState(false) //we are not currently showing that cart to when we are
  const [cartItems, setCartItems] = useState([]) //we always need to know what items we have in our cart. Going to use local storage as well for this
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1) //to change quanity for each individual item

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    //check if product is already in cart
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    //Below is updating our state I think. Now need it to happen both inside of below if and else
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
    //***Above, have no idea how we're getting prevTotalPrice or prevTotalQuantities - perhaps it's just a parameter and this is not calling the function, but we wiill do that later
    
    if (checkProductInCart) {

      //update the actual items in cart
      const updatedCartItems = cartItems.map((cartProduct) => { //udate if already exists in cart
        if (cartProduct._id === product._id) return { //return new object
          ...cartProduct, //spread cartProduct - *not sure what this is doing, is this just duplicating cartProduct? is cartProduct an array or object
          quantity: cartProduct.quantity + quantity //update quantity
        }
      })

      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }])
    }
    console.log('cartItems',cartItems);
    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  //2:17 - supposedly there's an error around 2:31 - look in youtube comments for solution. I'm also concerned about all these errors we're getting when adding multiple items to cart, or going back and adding an item to the cart that already is in the cart

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id) //give us the index of the item in the cart item array

    //are we incrementing or decrementing quantity
    if (value === 'inc') {
      // foundProduct.quantity += 1;
      // cartItems[index] = foundProduct;
      //**Above, What is cartItems? It is an array and it is a state propert, and most important rule of react is to never mutate the state, which means you should never update the state with an equals sign like we did in commented out code above, but should always use the setter function like 'setCartItems();.
      // below is proper way to do it
      // let newCartItems = [...cartItems, { ...foundProduct, quantity: foundProduct.quanity + 1 }]
      // setCartItems(newCartItems)
      // OR, even simpler
      setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quanity + 1 }]) //create new array by spreading current array of cartItems and add new product inside of it by creating new object, spread all of the properties of that object, and update the quantity of that object by adding 1 bc we are incrementing it
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) { //this is only time we'll decrease, bc if quantity is 1, we'll just use the 'x' button to get rid of item
        setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quanity - 1 }])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
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
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  )
}

//below, special function that allows us to more easily grab the state, essentially being like a hook
export const useStateContext = () => useContext(Context)