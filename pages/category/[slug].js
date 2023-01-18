import React, { useState } from 'react'

import { client, urlFor } from '../../lib/client'
import { Product, Category } from '../../components'

const CategoryDetails = ({ category, products, categories }) => {
  // const { image, name, details } = category
  // const [index, setIndex] = useState(0); //Don't know if need

  return (
    <div className={`sm:px-16 px-6 flex justify-center items-start`}>
      <div className={`xl:max-w-[1280px] w-full`}>
          {/* Could have like a category banner like below if want so there's an image displayed - might make it look better */}
          {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
          <div className="products-heading">
            <h2>{category.name}</h2>
            <p>{category.details}</p>
          </div>

          <div className="flex justify-center gap-[15px] flex-wrap mt-12">
          {/* <div className="products-container"> */}
            {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
            {products?.filter(product => product.category.toUpperCase() === `${category.name}`.toUpperCase()).map((product) => <Product key={product._id} product={product} />)}
          </div>

          {console.log('categories', categories)}
          <div className="maylike-products-wrapper">
            <h2>Other Industries to explore</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {categories.map((item) => (
                  <Category key={item._id} category={item} />
                ))}
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

// export const getServerSideProps = async () => { //getServerSideProps is like in react using useEffect and calling client and fetching the data
//   const productsQuery = '*[_type == "product"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
//   const products = await client.fetch(productsQuery);
//   const categoryQuery = '*[_type == "category"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
//   const categoryData = await client.fetch(categoryQuery);

//   return {
//     props: { products, categoryData }
//   }
// }


// BELOW WORKS IF JUST USING getStaticProps, but supposedly can't use getStaticProps and getServerSideProps
//WHEN DO WE USE BELOW - look on github commits to see what was doin
export const getStaticPaths = async () => {
  const query = `*[_type == "category"] { 
    slug {
      current
    }
  }
  `
  //Above, sanity's language is similar to graphql, but an optimized version of it. We're saying give me all the products, but don't return all of the data for all the products, just return the current slug property
  const categories = await client.fetch(query)

  const paths = categories.map((category) => ({ //had to add parantheses bc want to instantly return
    params: {
      slug: category.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking' //blocking is one of the ways you can set a fallback
  }
}

//BELOW, don't know a way to get products related to category with getStaticProps. So I'm going to get all products then filter above in return statement only products pertaining to that category, but I think I can just do all the filtering here
export const getStaticProps = async ({ params: { slug }}) => { //this is where it's dynamic like when you named file [slug]
  const query = `*[_type == "category" && slug.current == '${slug}'][0]`; //we only want to fetch first product that matches this query. This is used to fetch product details from the product page we are on
  const categoriesQuery = '*[_type == "category"]'// fetches similar products. This will fetch all the products. **Eventually, if there is a category, want to make this so it only fetches product belonging to same category of product we are on
  const productsQuery = '*[_type == "product"]'
  
  const category = await client.fetch(query); //this gets individual product
  const categories = await client.fetch(categoriesQuery)
  const products = await client.fetch(productsQuery)

  return {
    props: { categories, category, products },
    revalidate: 1
  }
}

// //BELOW, don't know a way to get products related to category with getStaticProps. Also, I'm going to get all products then filter above in return statement only products pertaining to that category, but I think I can just do all the filtering here
// export const getServerSideProps = async () => { //getServerSideProps is like in react using useEffect and calling client and fetching the data
//   const query = '*[_type == "product"]'; //we're essentially saying here, lets grab all the products from our sanity dashboard
//   const products = await client.fetch(query);

//   return {
//     props: { products }
//   }
// }


export default CategoryDetails