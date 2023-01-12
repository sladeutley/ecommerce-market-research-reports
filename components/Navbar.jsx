import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/style'

import { AiOutlineShopping } from 'react-icons/ai' //this is just a shopping icon
// import { close, logo, menu } from '../assets' //don't need bc we just need public folder for static assets in nextjs
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const logo = '/logo.svg'
  const menu = '/menu.svg'
  const close = '/close.svg'
  // NOTE, to know what these tailwind classes do, like below, go to tailwind docs and search for them - it will explain everything
  return (
    //THIS IS FROM ECOMMERCE SITE
    // <div className="navbar-container">
    //   <p className="logo">
    //     <Link href="/">U&G Market Research</Link>
    //   </p>

    //   <button type="button" className="cart-icon" onClick="">
    //     <AiOutlineShopping />
    //     <span className="cart-item-qty">1</span>
    //   </button>
    // </div>

    //BELOW IS A COMBO OF TW BIZ AND ECOMMERCE
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <nav className="w-full flex py-6 justify-between items-center navbar">
          {/* desktop */}
          {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
          <img src={logo} alt="hoobank" className="w-[124px] h-[32px] fill-black" />
          {/* Above, FOR SOME REASON DOING IT LIKE I DID IN TW BIZ SITE WHERE I'M IMPORTING IMAGE FROM ASSETS FOLDER IS NOT WORKING. IT IS WORKING IF I PUT ALL THESE IMAGES INTO PUBLIC FOLDER - BUT I DON'T KNOW IF THIS IS PROPER -> LOOK INTO THIS */}

          {/* This is our desktop nav bar, so that's why on small devices it will be hidden */}
          <ul className="list-none sm:flex hidden justify-end items-center text-white flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                // className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                // Above, 'navLinks.length-1' just means if it's last element, like one on far right, no margin, else margin 10. Didn't need it here though bc of cart
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          {/* mobile - note, do same thing here but with all the items if want totally different structure for mobile */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              // onClick={() => setToggle(!toggle)} //**in react, never want to update state using previous version of same old state. instead need to create a callback function like below. This way react knows to keep the state up to date
              onClick={() => setToggle((prev) => !prev)} 
            />
          </div>

          <button type="button" className="cart-icon flex justify-end mb-6" onClick="">
            <AiOutlineShopping />
            <span className="cart-item-qty">1</span>
          </button>

        </nav>

      </div>
    </div>
  )
}

export default Navbar