import Stripe from "stripe";
import config from "../../../config";


const stripe = new Stripe(config.stripeSecretKey, {
    apiVersion: '2020-08-27',
  });

  const createCharge = async (amount: number, source: string, currency = 'usd') => {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });
    return charge;
};

export const paymentService = {
    createCharge
}