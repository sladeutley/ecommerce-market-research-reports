//EVENTUALLY YOU COULD PUT THIS INTO SANITY.IO, BUT THAT MIGHT NOT BE NECESSARY

const people01 = '/people01.png'
const people02 = '/people02.png'
const people03 = '/people03.png'
// const facebook = '/facebook.svg'
const facebook = '/facebook-black.svg'
// const instagram = '/instagram.svg'
const instagram = '/instagram-black.svg'
// const linkedin = '/linkedin.svg'
const linkedin = '/linkedin-black.svg'
// const twitter = '/twitter.svg'
const twitter = '/twitter-black.svg'
const airbnb = '/airbnb.png'
const binance = '/binance.png'
const coinbase = '/coinbase.png'
const dropbox = '/dropbox.png'
const send = '/Send.svg'
const star = '/Star.svg'
const shield = '/Shield.svg'

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "About",
    title: "About Us",
    link: "/about",
  },
  {
    id: "Products",
    title: "Products",
    link: "/product",
  },
  {
    id: "Categories",
    title: "Categories",
    link: "/category",
  },
  // {
  //   id: "features",
  //   title: "Features",
  // },
  // {
  //   id: "product",
  //   title: "Product",
  // },
  // {
  //   id: "clients",
  //   title: "Clients",
  // },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Expert Analysis",
    content:
      "We develop reports that drive strategic decision making and sustainable growth",
  },
  {
    id: "feature-2",
    icon: send,
    title: "Cutting Edge Techniques",
    content:
      "Leverage experienced researchers and analysts to uncover valuable market trends",
  },
  {
    id: "feature-3",
    icon: shield,
    title: "Trusted Partner",
    content:
      "Accurate, unbiased, and actionable market research reports for the United States and beyond",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Reports and Growing",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Years of Experience",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Industries Covered",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        // link: "https://www.hoobank.com/blog/",
        link: "/blog",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];