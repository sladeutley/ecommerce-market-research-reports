import React from 'react'

const index = () => {
  return (
    <>
    {/* Above, I have no idea what wrapping everything in '<></>' does  */}
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
            <div className="products-heading">
              <h2>About - COULD HAVE THIS JUST LINK UP TO HOMEPAGE WHERE WE TALK ABOUT WHO WE ARE using id</h2>
              <p>This is what we're about</p>
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