import { Router } from "express";
import { ReviewController } from "./review.controller";
import { reviewZodSchema } from "./review.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post('/create',
validateRequest(reviewZodSchema.createReviewZodSchema),
ReviewController.createReview);
router.get('/', ReviewController.getReviews);
router.get('/:id', ReviewController.getSingleReview);
router.patch('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);


export const ReviewRoutes = router;