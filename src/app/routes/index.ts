import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { productRoutes } from '../modules/product/product.route';
import { BookingRoute } from '../modules/booking/booking.route';

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
    path: '/booking',
    route: BookingRoute
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;