import React from 'react'

import { client } from '../../lib/client'
import { HeroBanner, Product, FooterBanner } from '../../components'

const index = ({ products, bannerData }) => {
  return (
    <>
    {/* Above, I have no idea what wrapping everything in '<></>' does  */}
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
            <div className="products-heading">
              <h2>Best Selling Products</h2>
              <p>All of our products</p>
            </div>

            <div className="flex justify-center gap-[15px] flex-wrap">
            {/* <div className="products-container"> */}
              {products?.map((product) => <Product key={product._id} product={product} />)}
            </div>

            {/* After FooterBanner done, it might be time to start incorporating 'fully responsive site' - I take that back, haven't done navbar yet or set up Layout - maybe do after 'coded Footer component' commit */}
            <FooterBanner footerBanner={bannerData && bannerData[0]} />
        </div>
      </div>
    </>

//     <div>index is this thing on

// THIS IS HAPPENING ON PRODUCT DETAIL PAGE NOW. Got this warning when saved and page refreshed first time - make sure I'm doing this correctly for next.js
// About to perform a full refresh
// Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.

// You can find more information in the related error below:

// Error: Aborted because ./pages/product/index.js is not accepted
// Update propagation: ./pages/product/index.js  ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct&absolutePagePath=%2FUsers%2FSladeUtley%2Fworkspace%2FBusinessEnterprisesWithFranco%2Fecommerce-market-research-reports%2Fpages%2Fproduct%2Findex.js!
//     at applyHandler http://localhost:3000/_next/static/chunks/webpack.js?ts=1673649038789:884:31
//     at http://localhost:3000/_next/static/chunks/webpack.js?ts=1673649038789:531:21

//     </div>

  )
}

export const getServerSideProps = async () => { //getServerSideProps is like in react using useEffect and calling client and fetching the data
  const query = '*[_type == "product"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
  const products = await client.fetch(query);
  const banneryQuery = '*[_type == "banner"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
  const bannerData = await client.fetch(banneryQuery);

  return {
    props: { products, bannerData }
  }
}

export default index