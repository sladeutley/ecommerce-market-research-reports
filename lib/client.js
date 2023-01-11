import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'

// In 'sanity manage' page we were taken to - copy project id, On datasets tab, we see we have 'production'. apiVersion, we put date we created this (Or might have to put 2022-03-10 bc that was when instructor created project). token, we go to API tab, click on Tokens, click Add API token - name it 'Development', click 'Editor' to give it read and write access, click Save. It will then give you an api token that we will copy, and put into another folder (.env file) for security reasons

export const client = sanityClient({
  projectId: 'jfhhb4z6', //this is so sanity knows which project to connect us with
  dataset: 'production', //this is so we know wheter in development or production
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client) //gives ability to use sanity images

export const urlFor = (source) => builder.image(source) //sanity is going to give us access to the urls where our images are stored. we can now use sanity client anywhere in code.