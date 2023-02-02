import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../styles/style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => ( //these are the props that we're passing below in '<FeatureCard />' at end of page, that we are getting from imported features above which we are mapping over for '<FeatureCard />' and are also destructured from '{...feature}'
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
      <img src={icon} alt="check" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-stone-500 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  // Below, classes of 'layout.section', etc are taking the already defined style from imported layout above - just less typing overall bc we reuse a bunch
  // <section id="features" className={layout.section}>
  <section id="features" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
    {/* <div className={layout.sectionInfo}> */}
    <div className={`flex-1 flex justify-center items-start flex-col`}>
      <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full"}>
        Unlock untapped opportunities with<br className="sm:block hidden" /> data-driven market research
      </h2>
      <p className={`font-poppins font-normal text-stone-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        We specialize in identifying key industry trends and providing strategic recommendations to support our clients' long-term success
      </p>

      <Button styles={`mt-10`}  text={`Search Industries`} />
      {/* Above, 'styles' is a prop that has style of margin top of 10 */}
    </div>

    <div className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
      {features.map((feature, index) => (
        // <FeatureCard />
        // Above, bc we might want to reuse feature cards, but since we'll only be using it in this component, we create a FeatureCard component at top of this page
        <FeatureCard key={feature.id} {...feature} index={index} /> //this is like how we did the <Button /> above, but we need key bc we're mapping over it, and we are spreading (aka '{...feature}) all of the feature properties so that it will contain all the features that are inside of feature object, and give it an index that is equal to index (see the property we are mapping over (featuress.map((feature,index))) )
      ))}
    </div>
  </section>
);

export default Business;