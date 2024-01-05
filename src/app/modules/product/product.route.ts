import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import {ProductValidation} from './product.validation'

const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create',
validateRequest(ProductValidation.createProductZodSchema),
productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export const ProductRoutes = router;
