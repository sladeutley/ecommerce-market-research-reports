import React from 'react'

const FeedbackCard = ({ content, name, title, img }) => ( //As you can see, the props passed here are the same properties from the 'feautures' array that we import from constants in Testimonials component
  // <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-[100%] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
  <div className="flex sm:flex-1 justify-between flex-col px-10 py-12 rounded-[20px] w-[100%] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Once again, I'm not sure how this sm:mr-5 and md:mr-10 is working? Especially since there are 2 of them now so it can't mean do this to everything except this device */}
    <img src={'/quotes.svg'} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard