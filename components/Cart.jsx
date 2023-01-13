import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef() //not sure what this does
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()
  // console.log('cartItems', cartItems)

  const handleCheckout = () => {
    const stripe = await getStripe();

    //make api request to our own next.js backend
    const response = await fetch('/api/stripe', {
      //this second parameter is object with options (that you definied in 'stripe.js)
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems),
    })

    if (response.statusCode === 500) return; //if something goes wrong, exit function

    const data = await response.json()

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id }) //create specific instance of checkout, so if want to return and continue with purchase, they'll be able to do so.
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        {/* Below button will close cart */}
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}
        > 
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities})</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        
        {/* Below, this is what we do if have the items in our cart */}
        <div className="product-container">
          {/* {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="product" key={index}> */}
          {/* could have done this above, but whenever you have lists, it's better to do custom indexes, so did it the way below */}
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart