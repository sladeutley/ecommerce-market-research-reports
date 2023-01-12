import React from 'react'
//this page is for when user clicks on product it goes to that product page within new products folder. [slug] is the unique identifier from sanity.io and bc it's in brackets means it's dynamic

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { client, urlFor } from '../../lib/client' //to get the image for the specific product of the page we're on, we have to make an API call. **THIS IS WHEN YOU USE getServerSideProps (which I copied and pasted from index.js in pages folder). BUT, this time we're gonna change it to getStaticProps, which is another special next js function (used when data required to render the page is availale at build time head of a user's request AND data comes from a headless CMS (like Sanity.io)). Bc data is already there, we get it instantly when click on page
import { Product } from '../../components'

const ProductDetails = ({ product, products }) => { //just like getServerSideProps, getStaticProps allows us to get props here
  const { image, name, details, price } = product //destructure product prop

  return (
    <div>
      <div className="product-detail-container bg-white">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                src={urlFor(item)}
                className=""
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick=""><AiOutlineMinus /></span>
              <span className="num" onClick="">0</span>
              <span className="plus" onClick=""><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick="">Add to Cart</button>
            <button type="button" className="buy-now" onClick="">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
          {/* Above, marquee refers to a list of scrolling divs */}
          {/* Below, **TO GET RID of spinning effect on suggesting products, take off 'track' class */}
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] { 
    slug {
      current
    }
  }
  `
  //Above, sanity's language is similar to graphql, but an optimized version of it. We're saying give me all the products, but don't return all of the data for all the products, just return the current slug property
  const products = await client.fetch(query)

  const paths = products.map((product) => ({ //had to add parantheses bc want to instantly return
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking' //blocking is one of the ways you can set a fallback
  }
}

export const getStaticProps = async ({ params: { slug }}) => { //this is where it's dynamic like when you named file [slug]
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; //we only want to fetch first product that matches this query. This is used to fetch product details from the product page we are on
  const productsQuery = '*[_type == "product"]'// fetches similar products. This will fetch all the products. **Eventually, if there is a category, want to make this so it only fetches product belonging to same category of product we are on
  
  const product = await client.fetch(query); //this gets individual product
  const products = await client.fetch(productsQuery)

  return {
    props: { products, product }
  }
}

export default ProductDetails