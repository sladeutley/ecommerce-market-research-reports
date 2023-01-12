import React from 'react';

import styles from '../styles/style';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* NOTE - Make sure to add background color to hero and components below hero if want it like in commented out code below */}
      {/* <div className={`bg-primary ${styles.flexStart}`}> */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}> */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      {/* After FooterBanner done, it might be time to start incorporating 'fully responsive site' - I take that back, haven't done navbar yet or set up Layout - maybe do after 'coded Footer component' commit */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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