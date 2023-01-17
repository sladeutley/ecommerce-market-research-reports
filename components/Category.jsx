import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Category = ({ category: { image, name, slug } }) => {
  return (
    <div>
      <Link href={`/category/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0])} 
            // alt="" // I guess we don't need an alt, but could add one to sanity data
            // Reminder, above '&&' means if there is an image, then give us image[0] or first image
            width={250}
            height={250}
            className="product-image" 
          />
          <p className="product-name">{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Category