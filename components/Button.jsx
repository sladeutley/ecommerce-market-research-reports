import React from 'react'
import Link from 'next/link'

const Button = ({ styles, text }) => {
  let buttonLink;
  if (text === 'Search Industries') {
    buttonLink = '/category'
  } else if (text === 'View Reports') {
    buttonLink = '/product'
  }

  return ( //styles is the prop we passed in on Business component
    <Link href={buttonLink}>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        {text}
      </button>
    </Link>
  )
}

export default Button