import React from 'react'
//this page is for when user clicks on product it goes to that product page within new products folder. [slug] is the unique identifier from sanity.io and bc it's in brackets means it's dynamic

import { client, urlFfor } from '../../lib/client' //to get the image for the specific product of the page we're on, we have to make an API call. **THIS IS WHEN YOU USE getServerSideProps (which I copied and pasted from index.js in pages folder). BUT, this time we're gonna change it to getStaticProps, which is another special next js function (used when data required to render the page is availale at build time head of a user's request AND data comes from a headless CMS (like Sanity.io)). Bc data is already there, we get it instantly when click on page

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params: { slug }}) => { //this is where it's dynamic like when you named file [slug]
  const query = `*[_type == "product" && slug.current == '${slug}][0]`; //we only want to fetch first product that matches this query. This is used to fetch product details from the product page we are on
  const productsQuery = '*[_type == "product"]'// fetches similar products. This will fetch all the products. **Eventually, if there is a category, want to make this so it only fetches product belonging to same category of product we are on
  
  const product = await client.fetch(query); //this gets individual product
  const products = await client.fetch(productsQuery)

  return {
    props: { products, product }
  }
}

export default ProductDetails