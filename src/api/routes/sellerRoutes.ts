import { Router } from 'express';

const router = Router();
/**
 * @desc route to signup as seller
 * @route /seller/signup
 * @type POST
 * @access "PUBLIC"
 */
router.post('/signup');
/**
 * @desc route to signin as seller
 * @route /seller/signin
 * @type POSt
 * @access "PUBLIC"
 */
router.post('/signin');
/**
 * @desc route to get all product or specific product if id provided
 * @route /seller/product:id
 * @type POST
 * @type "PUBLIC"
 */
router.get('/product:id');
/**
 * @desc route to post review about the seller
 * @routr /seller/:id/review
 * @type POST
 * @access "BUYER"
 */
router.post('/:id/review');

export { router as default };
