import React from 'react'
import { feedback } from "../constants";
import styles from "../styles/style";
import FeedbackCard from "./FeedbackCard"; //this is a component we have yet to code, but know we will use it so import it to start

const Testimonials = () => (
  <section id="clients" className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] text-left max-w-[450px]`}>
        {/* <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] text-left`}> */}
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Below, not sure I like flex- wrap, but then if got rid of it, would have to change to be column on small devices. Could also change max width in FeedbackCard component -> ***Adding flex-1 on everything but small devices in the FeedbackCard component seemed to do the trick - not really sure how but he did it on Clients component after using flex-wrap and it worked*/}
    {/* <div className="flex flex-col sm:flex-row sm:justify-start justify-center w-full feedback-container relative z-[1]"> */}
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    {/* <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]"> */}
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      {/* Above, like in another component we did, '{...card}' is spreading the properties of a card (which we imported above). I think by doing this we're giving the FeedbackCard component props of the features properties imported from constants. You'll see that next when we code FeedbackCard component, we will give it props of these feature properties, so it can be dynamic */}
    </div>
  </section>
);

export default Testimonials