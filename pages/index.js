import React from 'react';

import styles from '../styles/style';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from '../components';

const Home = () => {
  return (
    <>
      {/* NOTE - Make sure to add background color to hero and components below hero if want it like in commented out code below */}
      {/* <div className={`bg-white ${styles.flexStart}`}> */}
      <div className={`flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>

      {/* <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}> */}
      <div className={`sm:px-16 px-6 flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Stats />  
          <Business /> 
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>

    </>
  )
}

// ***********
// BELOW is when had products on homepage
// *************

// const Home = ({ products, bannerData }) => {
//   return (
//     <>
//       {/* NOTE - Make sure to add background color to hero and components below hero if want it like in commented out code below */}
//       {/* <div className={`bg-white ${styles.flexStart}`}> */}
//       <div className={`flex justify-center items-start`}>
//         <div className={`xl:max-w-[1280px] w-full`}>
//           <Hero />
//         </div>
//       </div>

//       {/* <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}> */}
//       <div className={`sm:px-16 px-6 flex justify-center items-start`}>
//         <div className={`xl:max-w-[1280px] w-full`}>
//           <Stats />  
//           <Business /> 
//           <Billing />
//           <CardDeal />
//           <Testimonials />
//           <Clients />
//           <CTA />
//         </div>
//       </div>

//       <div className={`sm:px-16 px-6 flex justify-center items-start`}>
//         <div className={`xl:max-w-[1280px] w-full`}>
//           <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
//             <div className="products-heading">
//               <h2>Best Selling Products</h2>
//               <p>Speakers of many variations</p>
//             </div>

//             <div className="flex justify-around flex-wrap">
//             {/* <div className="products-container"> */}
//               {products?.map((product) => <Product key={product._id} product={product} />)}
//             </div>

//             {/* After FooterBanner done, it might be time to start incorporating 'fully responsive site' - I take that back, haven't done navbar yet or set up Layout - maybe do after 'coded Footer component' commit */}
//             <FooterBanner footerBanner={bannerData && bannerData[0]} />
//         </div>
//       </div>


//     </>
//   )
// }

// export const getServerSideProps = async () => { //getServerSideProps is like in react using useEffect and calling client and fetching the data
//   const query = '*[_type == "product"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
//   const products = await client.fetch(query);
//   const banneryQuery = '*[_type == "banner"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
//   const bannerData = await client.fetch(banneryQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

export default Home;