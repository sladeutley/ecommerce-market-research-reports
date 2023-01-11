export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array', //this is referring to an array of images
      of: [{ type: 'image' }],
      options: {
        hotspot: true, //check out the sanity docs if ever want to know what something does -> apparently 'Hotspot makes it possible to responsively adapt images to different aspect ratios at display time. The default value for hotspot is false'
      }
    },
    {
      name: 'name', //the category name
      title: 'Name',
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
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'featured', //will category be featured on homepage
      title: 'Featured',
      type: 'boolean',
    }
  ]
}