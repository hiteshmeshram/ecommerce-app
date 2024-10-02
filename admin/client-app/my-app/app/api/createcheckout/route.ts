import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

export  async function POST(req:NextRequest,res:NextResponse) {
  const cartProducts =await  req.json()
  console.log(cartProducts)
//  console.log("entered post req")
const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY || "");
// console.log("stripe api key")
// console.log(process.env.STRIPE_API_SECRET_KEY)


  const session = await stripe.checkout.sessions.create({
    
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'http://localhost:3000/paymentsuccess?session_id={CHECKOUT_SESSION_ID}'
  });
return NextResponse.json({clientSecret: session.client_secret});
}

