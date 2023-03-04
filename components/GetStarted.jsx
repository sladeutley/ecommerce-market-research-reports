import React from 'react'
import styles from '../styles/style';
import Link from 'next/link'


const GetStarted = () => (
  //Below changed margin left and right - I am not a fan of how it goes to column so soon, but i think it has to bc of the image on right
  // <div className={`${styles.flexCenter} sm:ml-16 sm:mr-40 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
  <div className={`flex justify-center items-center sm:ml-8 sm:mt-12 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <Link href="/product">
      <div className={`flex justify-center items-center flex-col bg-white w-[100%] h-[100%] rounded-full`}>
        <div className={`flex justify-center items-start flex-row`}>
          {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2"> */}
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">View</span>
          </p>
          <img src={'/arrow-up-black.svg'} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Products</span>
        </p>
      </div>
    </Link>
  </div>
);

export default GetStarted