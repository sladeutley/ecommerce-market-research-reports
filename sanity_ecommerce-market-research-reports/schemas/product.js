export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array', //this is referring to an array of images
      of: [{ type: 'image' }],
      options: {
        hotspot: true, //check out the sanity docs if ever want to know what something does
      }
    },
    {
      name: 'name', //the product name
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category', //the product's category
      title: 'Category',
      type: 'string',
    },
    {
      name: 'slug', //slug is a url / unique string
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', //this makes it so it provides a unique slug based off our 'name' property (the object above this)
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'featured', //will product be featured on homepage
      title: 'Featured',
      type: 'boolean',
    }
  ]
}