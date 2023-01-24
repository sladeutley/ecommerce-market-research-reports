import React from 'react'

const index = () => {
  return (
    <>
    {/* Above, I have no idea what wrapping everything in '<></>' does  */}
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        {/* <div className={`xl:max-w-[1280px] w-full`}> */}
        <div className={`xl:max-w-[1280px] sm:w-[50%]`}>
            <div className="products-heading">
              <h2>About Us</h2>
              <p className="text-left">At Precision Market Research, we are a team of experienced professionals who specialize in providing comprehensive and innovative market research solutions. Our goal is to empower businesses to make data-driven decisions that drive sustainable growth and long-term success. We understand the importance of staying ahead in today's competitive business landscape, and that's why we use cutting-edge techniques and tools to uncover valuable insights and identify key industry trends. We pride ourselves on delivering high-quality, actionable data that helps businesses navigate the ever-evolving market dynamics and stay ahead of the curve. Our commitment to delivering exceptional customer service and building long-term partnerships with our clients sets us apart as a trusted partner in the industry. With our team of experts, we are confident in our ability to provide you with the insights and recommendations you need to achieve your business goals.</p>
            </div>
            {/* {console.log('categories', categories)} */}
            {/* <div className="flex justify-center gap-[15px] flex-wrap"> */}
            {/* <div className="products-container"> */}
              {/* {categories?.map((category) => <Category key={category._id} category={category} />)} */}
            {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default index