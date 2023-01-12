import React from 'react';
import { Toaster } from 'react-hot-toast' //this will make our small notification pop up

import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        {/* Below, 'Component' means whichever component we are currently on */}
        <Component {...pageProps} /> 
      </Layout>
    </StateContext>
  )
}
