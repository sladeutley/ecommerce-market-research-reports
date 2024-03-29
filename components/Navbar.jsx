import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/style'

import { AiOutlineShopping } from 'react-icons/ai' //this is just a shopping icon
// import { close, logo, menu } from '../assets' //don't need bc we just need public folder for static assets in nextjs
import { navLinks } from "../constants";

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const [toggle, setToggle] = useState(false);
  // const logo = '/logo.svg'
  // const logo = '/logo-black.svg'
  const logo = '/atlas-insights-logo.jpeg'
  // const menu = '/menu.svg'
  const menu = '/menu-black.svg'
  // const close = '/close.svg'
  const close = '/close-black.svg'
  // NOTE, to know what these tailwind classes do, like below, go to tailwind docs and search for them - it will explain everything
  return (
    // THIS IS FROM ECOMMERCE SITE
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

        <nav className="w-full flex sm:py-1 py-2 justify-between items-center navbar">
          {/* desktop */}

          {/* <p className="logo sm:flex hidden">
            <Link href="/">U&G MR</Link>
          </p> */}
          {/* Above is just using text for logo */}
          {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
          {/* Below is the good logo image */}
          {/* <Link href="/"><img src={logo} alt="hoobank" className="w-[124px] h-[32px] fill-black sm:flex hidden cursor-pointer" /></Link> */}
          <Link href="/"><img src={logo} alt="Atlas Insights | Market Research" className="w-[124px] h-[66px] fill-black sm:flex hidden cursor-pointer" /></Link>
          {/* Above, FOR SOME REASON DOING IT LIKE I DID IN TW BIZ SITE WHERE I'M IMPORTING IMAGE FROM ASSETS FOLDER IS NOT WORKING. IT IS WORKING IF I PUT ALL THESE IMAGES INTO PUBLIC FOLDER - BUT I DON'T KNOW IF THIS IS PROPER -> LOOK INTO THIS */}
          {/* **Also above, it looks like the logo and navbar items aren't centered (except for the cart is obviously above everything else), but I think that's just bc the way the logo image is */}

          {/* This is our desktop nav bar, so that's why on small devices it will be hidden */}
          <ul className="list-none sm:flex hidden justify-end items-center text-black flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                // className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                // Above, 'navLinks.length-1' just means if it's last element, like one on far right, no margin, else margin 10. Didn't need it here though bc of cart
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black mr-10`}
              >
              <Link href={`${nav.link}`}>
                {nav.title}
              </Link>
                {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                {/* Above was used for when it scrolled down to that section on home page. LOOK INTO WHY THE FONT IS DIFFERENT WHEN A TAG VS NO TAG */}
              </li>
            ))}
          </ul>
          <button type="button" className="cart-icon sm:flex hidden justify-end mb-6" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
            {/* Above, **StateContext is what allows us to update quantity in cart icon, as well as in cart when add item is clicked on product detal page, bc it's universal */}
          </button>

          {/* mobile - note, do same thing here but with all the items if want totally different structure for mobile */}

          <div className="sm:hidden flex justify-start items-center">
            <img 
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              // onClick={() => setToggle(!toggle)} //**in react, never want to update state using previous version of same old state. instead need to create a callback function like below. This way react knows to keep the state up to date
              onClick={() => setToggle((prev) => !prev)} 
            />
            {/* Below is the list that appears when hamburger menu is clicked on - **Needs some work stylistically, and would love it if animation came from top not bottom */}
            <div
              className={`${toggle ? "flex" : "hidden"} p-6 bg-white absolute top-14 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar`}
              // className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-14 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                    onClick={() => setToggle((prev) => !prev)} //I THINK I DID THIS RIGHT SO THAT IT TOGGLES TO CLOSED WHEN NAVBAR ITEM IS CLICKED ON. I did it on logo and shopping cart too, so if change it here, change it there as well
                  >
                    <Link href={`${nav.link}`}>
                      {nav.title}
                    </Link>
                    {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                    {/* Above was used for when it scrolled down to that section on home page */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* <p className="logo sm:hidden flex justify-center items-center">
            <Link href="/">U&G MR</Link>
          </p> */}
          {/* Above is using text for logo */}
          <Link href="/"><img src={logo} alt="Atlas Insights | Market Research" className="w-[74px] h-[40px] fill-black sm:hidden flex justify-center items-center" /></Link>
          
          {/* <button type="button" className="cart-icon sm:hidden flex justify-end items-center" onClick=""> */}
          {/* <button type="button" className="cart-icon-mobile sm:hidden flex justify-end items-center" onClick={() => {setShowCart(true); setToggle((prev) => !prev)}}></button> */}
          {/* ***Above did not work - cannot seem to get it to toggle off when clicked on - not sure it really matters that much though  */}
          <button type="button" className="cart-icon-mobile sm:hidden flex justify-end items-center" onClick={() => setShowCart(true)}>
          {/* Above, made class 'cart-icon-mobile' so it could be a bit bigger. Also, you can change it so it's not transparent looking and its color */}
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </nav>

  )
}

export default Navbar