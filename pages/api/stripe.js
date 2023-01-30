import Stripe from 'stripe'

//**FOLLOW STEPS BELOW 
// const stripe = new Stripe(); //1a.create new instance of stripe, but if we hover over 'Stipe', we see we need an api key -> follow steps below to integrate stipe to our ecommerce store
// 1b. Go to stipe.com, and login 
// 2. Go to test mode in top right corner (*NOTE - will need to finish filling out business profile and 'active payments' (start over - some answers I provided may be wrong) again for actual business to start receiving $ once site is live)
// 3. copy pulishable key, and put it in .env file like i've done (AGAIN, WILL HAVE TO CHANGE THIS TO LIVE KEY ONCE WE'VE ACTIVATED BUSINESS ON STRIPE AND ARE READY FOR SITE TO GO LIVE). Do same thing for secret key (not sure, actually don't think this will have to be changed once we're going live)
// 4. now you can pass in api key to stripe

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// 5. In next.js, each file has to have it's own handler (the 'req' and 'res' kinda like we do in express)
// export default async function handler(req, res) {
//   //can do if statement for each different type of request (get, post, etc). below is like file based routing in practice, like going to '/stripe', but backend, i think?
//   if (req.method === 'POST') {
//     try {
//       //how do we accept payments. Go to their documentation - 'stripe.com/docs/' then for us 'accept payments'. then copy and paste code for next.js 
//     } catch (error) {
//       res.status(500).json({ statusCode: 500, message: error.message}) //500 is server error
//     }
//   }
// }

// 6. Comment out all the work we've done, and just copy and paste what stripe has in documentation but adapt it for us (e.g. change secret key name in .env file to match theirs, 'i think publishable key is the same name'). Next, start following my commits

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// console.log('stripe', stripe)


export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('req.body',req.body); //this should show up in console in terminal (this is the items currently in your cart, not browser, bc backend. **Also, below of req.body.cartItems is what he had but for some reasons I just have to put req.body
    // console.log('items in checkout', req.body.cartItems)
    // console.log('req.body[0].image',req.body[0].image);


    const products = await stripe.products.list({
      active: true
    });
    console.log('products',products);


    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'], //I THINK I CAN ADD MORE PAYMENT TYPES LIKE APPLE PAY, etc - look in documentation. Also when testing out checkout, use '4242 4242 4242 4242' as credit card number - it's a stripe card for testing. **ALSO, FOR EMAILS, although you're probably going to use send owl to deliver pdfs, stripe can send confirmation emails - go to settings icon in top right corner of site, click on 'customer emails' under business settings, turn on successful payments (might only work once live and not on testing mode). Also, looks like you can have a custom domain instead of redirecting to stripe website. but it costs $10 a month.
        billing_address_collection: 'auto',
        // shipping_options: [ //WILL NOT NEED THIS FOR DIGITAL DOWNLOADS, but if for future use, go to stripe dashboard, click on Products tab, on left sidebar click shipping rates, create shipping rate, fill out prompts, then copy id of shipping, and paste it below. *COULD PROBABLY USE THIS PROCESS FOR OTHER PROPERTIES LIKE 'Coupons', etc. 
        //   { shipping_rate: 'SAMPLE_ID' },
        //   { shipping_rate: 'SAMPLE_ID_2' }
        // ],
        // line_items: [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: '{{PRICE_ID}}',
        //     quantity: 1,
        //   },
        // ],
        line_items: req.body.map((item) => {

          // console.log('item.name',item.name);
          let productId;
          for (let i = 0; i < products.data.length; i++) {
            if (products.data[i].name === `${item.name}`) {
              productId = products.data[i].id;
              break;
            }
          }
          console.log('productId',productId);


          const img = item.image[0].asset._ref; //this is not actual image, just reference, so have to do newImage below, with letters after '/images' being id of project in sanity.io/manage then the project you're in
          console.log('img',img);
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/jfhhb4z6/production/').replace('-webp', '.webp').replace('-jpeg', '.jpeg').replace('-jpg', '.jpg').replace('-png', '.png'); //again, jfhhb4z6 is your sanity production id. MAKE SURE TO CHANGE IT TO YOUR CURRENT PROJECT ID (in sanity folder, type sanity manage to get to page where this info is) see comment above. ALSO, might want to do this as 'jpg' to .jpg' for when you upload your images which will probably be jpg's - might wanna do all in one replace method rather than two, but don't think it really matters

          console.log('newImage',newImage);
          return { //return object that represents one of our items
            price_data: { 
              currency: 'usd',
              product: productId,
              // Below, can only have if don't have the product item above (which will take the info from product i have in stripe and apply it instead of created new stuff like below)
              // product_data: {
              //   product: productId, 
              //   name: item.name,
              //   images: [newImage],
              // },
              unit_amount: item.price * 100, // '* 100' bc unit amount has to be in cents
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity,
          }
        }),
        // mode: 'payment', //don't need bc already have it above (although not in this object which I don't get)
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`, //MAKE SURE THERE ARE NO ISSUES WITH THIS - it wouldn't work when just 'canceled'
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      console.log('session',session);
      // res.redirect(303, session.url);
      // don't want to redirect above, but instead do below
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

//to debug, in console log in browser, click on warning, and for instance if it's some sort of server error like 401 or 500, it'll take you to network page where you can click on then highlighted error, and it'll give you more details about what's wrong

