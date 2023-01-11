import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url'

const client = sanityClient({
  projectId: '', //this is so sanity knows which project to connect us with
  dataset: '', //this is so we know wheter in development or production
  apiVersion: '',
  useCdn: true,
  token: ''
})