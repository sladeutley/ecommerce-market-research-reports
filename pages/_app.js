import React from 'react'; 

import { Layout } from '../components'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* Below, 'Component' means whichever component we are currently on */}
      <Component {...pageProps} />
    </Layout>
  )
}
