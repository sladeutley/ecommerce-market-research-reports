import React from 'react'
import Link from 'next/link'

import styles from '../styles/style'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { footerLinks, socialMedia } from "../constants";

// Below is ecommerce footer
// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <p>2022 U&G Holdings All rights reserved</p>
//       <p className="icons">
//         <AiFillInstagram />
//         <AiOutlineTwitter />
//       </p>
//     </div>
//   )
// }

const Footer = () => (
  <section className={`flex justify-center items-center sm:py-16 py-6 flex-col`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start">
        {/* <img
          src={'/logo-black.svg'}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
        <img
          src={'/atlas-insights-logo.jpeg'}
          alt="Atlas Insights"
          className="w-[223px] h-[120px] object-contain mx-auto xs:mx-0"
          // Above, the mx-auto class is applied to the img element for all screen sizes. However, the sm:mx-0 class is also applied to the img element, which sets the horizontal margin to 0 on small screens (i.e. screens with a width of 640px or greater). This overrides the mx-auto class and aligns the image to the left on small screens. 
        />
        <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] mt-4 max-w-[312px] mr-10`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-1 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-stone-500 hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link href={`${link.link}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2023 U&G Holdings. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer