import React from 'react'
import styles from '../styles/style'
import GetStarted from "./GetStarted"

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      
    {/* <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}> */}
    <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:pl-16 px-6`}>
      
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={'/Discount.svg'} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px]`}>
          <span className="text-black">20%</span> Discount For{" "}
          <span className="text-black">1 Month</span> Account
        </p>
      </div> */}

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
          Uncovering<br className="sm:block hidden" />{" "}
          <span className="text-gradient">Valuable</span>{" "}
        </h1>
        <div className="ss:flex hidden mr-20 ml-5 justify-center">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
        Insights for<br className="md:block hidden" />{" "} Growth
      </h1>
      <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        At Atlas Insights, we empower businesses to make data-driven decisions through our comprehensive and innovative market research solutions
      </p>

    </div>

    <div className={`flex-1 lg:flex hidden justify-center items-center md:my-0 my-10 relative`}>
      {/* <img src={'/hero_img_550x542.png'} alt="market research reports" className="max-w-[550px] h-[542px] relative z-[5]" /> */}
      <img src={'/hero_img_550x542.png'} alt="market research reports" className="w-[550px] h-[542px] relative z-[5]" />
      {/* <img src={'/hero_img_355x350.png'} alt="market research reports" className="w-[100%] h-[100%] relative z-[5]" /> */}
      {/* <img src={'/robot.png'} alt="billing" className="w-[538px] h-[542px] relative z-[5]" /> */}
      {/* Above, the z-[5] (z index of 5) makes the image appear above our gradients */}

      {/* gradient start */}
      {/* MAKE SURE TO ADD BACK GRADIENT BELOW AFTER WE GET BACK IMAGE WITH BACKGROUND REMOVED  */}
      <div className="absolute z-[0] w-[60%] h-[55%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[95%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[70%] h-[70%] right-20 bottom-20 blue__gradient" />
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={`flex-1 lg:hidden flex justify-center items-center md:my-0 my-10 relative`}>
      {/* <img src={'/hero_img_550x542.png'} alt="market research reports" className="max-w-[450px] h-[442px] relative z-[5]" /> */}
      <img src={'/hero_img_550x542.png'} alt="market research reports" className="w-[450px] h-[442px] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[55%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[95%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[70%] h-[70%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden flex justify-center items-center`}>
      <GetStarted />
    </div>
  </section>
)


export default Hero