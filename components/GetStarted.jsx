import React from 'react'
import styles from '../styles/style';


const GetStarted = () => (
  //Below changed margin left and right - I am not a fan of how it goes to column so soon, but i think it has to bc of the image on right
  <div className={`${styles.flexCenter} sm:ml-16 sm:mr-40 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
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
  </div>
);

export default GetStarted