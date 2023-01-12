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

  //create our context provide. Below means we are not rendering anything, we are just wrapping everything with our context provider, and we're going to pass some values to it
  return (
    <Context.Provider>
      value={{ //below pass values of all of our state fields. This makes it so we'll be able to access the values from these states in any one of our components. But to app that happen we will have to wrap entire app with state context in _app.js
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty
      }}
      {children}
    </Context.Provider>
  )
}