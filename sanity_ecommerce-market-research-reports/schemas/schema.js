import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import category from './category';
import blog from './blog';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, category, blog ]),
})

// Might need to use https://www.sanity.io/docs/schema-field-types for product.js and banner.js if start having issues with way i coded it. Also, google or chatgpt if configured this and index.js file correctly