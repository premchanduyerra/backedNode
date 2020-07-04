import { Router } from 'express';
import { productEntryHandler } from '../handlers/producthandlers';
const router = Router();
/**
 * @desc This is to add the product by seller
 * @route /product/
 * @type POST
 * @access "Seller"
 */
router.post('/', productEntryHandler);
/**
 * @desc Route to get all product or specific product if ID provided
 * @route /product/:id
 * @type GET
 * @access "PUBLIC"
 */
router.get('/:id');
/**
 * @desc Route to update the specific product
 * @route /product/:id
 * @type PATCH
 * @access "SELLER"
 */
router.patch('/:id');
/**
 * @desc Raise any complaint against the product
 * @route /product/:id/review
 * @type POST
 * @access "BUYER"
 */
router.post('/:id/complaint');
export { router as default };
