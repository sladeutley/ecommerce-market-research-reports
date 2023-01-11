import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai' //this is just a shopping icon

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">U&G</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar