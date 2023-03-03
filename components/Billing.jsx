import React from 'react'
import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles/style";

const Billing = () => (
  // Below, the sectionReverse is making it so on mobile it shows the right column first (bc it's in a row on mobile)
  <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
      {/* <img src={'/bill.png'} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <img src={'/hero_image_scifi-removebg-preview-background-removed.png'} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
        {/* Why use a <br className="sm:block hidden" /> market research report? */}
        Why use a market research report?
      </h2>
      <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Our market research reports can provide cost savings for entrepreneurs seeking funding from investors or banks, as well as rewriting existing business plans. These reports are also valuable resources for business plans needed to support E-2, L-1A/B, and EB-5 visa applications, offering crucial insights into the relevant markets and industries   
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={'/apple.svg'} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={'/google.svg'} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing