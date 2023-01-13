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

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

