import React from 'react'

import { client } from '../../lib/client'
import { Category, Search } from '../../components'

const index = ({ categories }) => {
  return (
    <>
    {/* Above, I have no idea what wrapping everything in '<></>' does  */}
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
            <div className="products-heading">
              <h2>Industries Covered</h2>
              <p>List of Industries Covered</p>
            </div>
            <Search items={categories} />
            {console.log('categories', categories)}

            {/* Below, if for if have no search feature */}
            {/* <div className="flex justify-center gap-[15px] flex-wrap"> */}
            {/* <div className="products-container"> */}
              {/* {categories?.map((category) => <Category key={category._id} category={category} />)} */}
            {/* </div> */}
        </div>
      </div>
    </>

  )
}

export const getServerSideProps = async () => { //getServerSideProps is like in react using useEffect and calling client and fetching the data
  const query = '*[_type == "category"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
  const categories = await client.fetch(query);

  return {
    props: { categories }
  }
}

export default index