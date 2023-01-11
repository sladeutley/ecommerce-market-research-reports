export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array', //this is referring to an array of images
      of: [{ type: 'image' }],
      options: {
        hotspot: true, 
      }
    },
    {
      name: 'name', //the blog name
      title: 'Name',
      type: 'string',
    },
    {
      name: 'author', //the blog's author
      title: 'Author',
      type: 'string',
    },
    {
      name: 'category', //the blog's category
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
      name: 'subheader',
      title: 'Subheader',
      type: 'number',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'featured', //will blog be featured on homepage
      title: 'Featured',
      type: 'boolean',
    }
  ]
}