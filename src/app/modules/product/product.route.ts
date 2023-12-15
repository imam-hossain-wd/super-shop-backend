import { Router } from 'express';
import { productController } from './product.controller';


const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export const productRoutes = router;
