import { Router } from "express";
import { paymentController } from "./payment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { paymentZodSchema } from "./payment.validation";


const router = Router();

router.post('/create-payment-intent',
validateRequest(paymentZodSchema.createPaymentZodSchema),
paymentController.payment);


export const PaymentRoutes = router;