import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'; //not sure why we need this and can't just access from heroBanner prop. ALSO, Got weird prompt message saying vscode wants access to 'volumes' on my network or computer or something. See if this happens again when you build the ecommerce site for U&G

const HeroBanner = ({ heroBanner }) => { //passed in heroBanner prop
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.midText}</p>
        <h3>{heroBanner.smallText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner