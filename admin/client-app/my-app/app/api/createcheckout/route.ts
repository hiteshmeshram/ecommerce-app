import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';
// interface Item {
//   id: number,
//   userId: number,
//   productId: number,
//   product: {
//     name: string,
//     price: string
//   }
// }

export  async function POST(req:NextRequest) {
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
    // line_items: [cartProducts.map((item: Item)=>(
    //   {
    //       price_data: {
    //         currency: 'usd',
    //         product_data: {
    //           name: item.product.name,
    //         },
    //         unit_amount: item.product.price,
    //       },
    //       quantity: 1,
    //     }
    // ))],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'http://localhost:3000/paymentsuccess?session_id={CHECKOUT_SESSION_ID}'
  });
return NextResponse.json({clientSecret: session.client_secret});
}

