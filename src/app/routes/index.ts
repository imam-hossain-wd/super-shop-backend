import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { ProductRoutes} from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { PaymentRoutes} from '../modules/payment/payment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/product',
    route: ProductRoutes
  },
  {
    path: '/order',
    route: OrderRoutes
  },
  {
    path: '/review',
    route: ReviewRoutes
  },
  {
    path: '/payment',
    route: PaymentRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;