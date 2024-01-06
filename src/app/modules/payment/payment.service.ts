/* eslint-disable @typescript-eslint/ban-ts-comment */
import Stripe from "stripe";
import config from "../../../config";


const stripe = new Stripe(config.stripeSecretKey as string, {
    apiVersion: '2023-10-16',
  });


  const createCharge = async (price: string) => {
    const productPrice = parseInt(price)
    const amount = (productPrice * 100);
    console.log(amount, 'amount inside the intent')

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card']
    });

    const result = paymentIntent.client_secret
    return {
      clientSecret: result
    }
};

export const paymentService = {
    createCharge
}