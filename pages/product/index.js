import React from 'react'

const index = () => {
  return (
    <div>index is this thing on

Got this warning when saved and page refreshed first time - make sure I'm doing this correctly for next.js
About to perform a full refresh
Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.

You can find more information in the related error below:

Error: Aborted because ./pages/product/index.js is not accepted
Update propagation: ./pages/product/index.js  ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct&absolutePagePath=%2FUsers%2FSladeUtley%2Fworkspace%2FBusinessEnterprisesWithFranco%2Fecommerce-market-research-reports%2Fpages%2Fproduct%2Findex.js!
    at applyHandler http://localhost:3000/_next/static/chunks/webpack.js?ts=1673649038789:884:31
    at http://localhost:3000/_next/static/chunks/webpack.js?ts=1673649038789:531:21

    </div>

  )
}

export default index