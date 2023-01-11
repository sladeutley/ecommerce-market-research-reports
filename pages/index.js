import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner />
    </>
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

export default Home;