"use client"
import getCartProductsId from "@/lib/actions/getCartProductsId";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react"


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageurl: string;
  adminId: number;
}

interface Products {
  id: number,
  userId: number,
  productId: number,
  product: Product
}

export default function checkout() {
  const [cartItems,setCartItems] = useState<Products[] | null>(null)
  const stripePromise = loadStripe("pk_test_51Q5RFpC2pgobjWijBlnBEHRZPC3qGYpDMCQRPDUbWGTNyfDUFjwpw99azL4dVN3zxaU9kPhX9yqI5htt4mxq6t0q00ku9HWmXa");
  //@ts-ignore  
    // const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY )
  
  const [clientSecretKey, setClientSecretKey] =useState<string>("");

    async function fetchFunction() {
      const items = await getCartProductsId();
      setCartItems(items)
        try {
            const res = await axios.post('/api/createcheckout',{
              cartProducts: cartItems
            });
            setClientSecretKey(res.data.clientSecret); // Assuming 'clientSecret' is in the response
          } catch (error) {
            console.error("Error creating checkout session:", error);
          }
    }
    useEffect(()=>{
       fetchFunction()
    },[])

    function getAllCartProducts() {

    }

    // useEffect(()=>{
    //   const cartitems = getCartProductsId();
      
    //   setCartItems(cartitems)
    // },[])

    //make an db call inside useffect and get all products 
    //store it inside a state variable 
    //pass that products to axios as body

    const options = {
        clientSecret: clientSecretKey,
      };

    return <div>
        <EmbeddedCheckoutProvider
             stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
}