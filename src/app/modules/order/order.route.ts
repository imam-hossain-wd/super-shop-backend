import { Router } from "express";
import { OrderController } from "./order.controller";
import validateRequest from "../../middlewares/validateRequest";
import { OrderZodSchema } from "./order.validation";


const router = Router();

router.post('/create',
validateRequest(OrderZodSchema.createOrderZodSchema),
OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/:id', OrderController.getSingleOrder);
router.patch('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);


export const orderRoutes = router;