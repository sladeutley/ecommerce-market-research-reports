import React from 'react'
import styles from "../styles/style";
import Button from "./Button";

const CTA = () => (
  <section className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">Get Started Now</h2>
      <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Customized and competitively priced market research reports at your fingertips
      </p>
    </div>

    <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text={`View Reports`} />
    </div>
  </section>
);

export default CTA