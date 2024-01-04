import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { productRoutes } from '../modules/product/product.route';
import { orderRoutes } from '../modules/order/order.route';
import { ReviewRoutes } from '../modules/review/review.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes
  },
  {
    path: '/users',
    route: userRoutes
  },
  {
    path: '/products',
    route: productRoutes
  },
  {
    path: '/order',
    route: orderRoutes
  },
  {
    path: '/review',
    route: ReviewRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;