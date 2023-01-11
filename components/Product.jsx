import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client' //use this to get the url for the image within our sanity dashboard

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='prduct-card'>
          <img 
            src={urlFor(image && image[0])} 
            // alt="" // I guess we don't need an alt, but could add one to sanity data
            // Reminder, above '&&' means if there is an image, then give us image[0] or first image
            width={250}
            height={250}
            className="product-image" 
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product