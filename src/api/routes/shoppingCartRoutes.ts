import express from 'express';
import { Router } from 'express';

import { AddProductsToCartHandler } from '../handlers/AddProductsToCartHandler';
import { getCartProductsHandler } from "../handlers/getCartProductsHandler";
import { placeOrderHandler } from "../handlers/placeOrderHandler";
const router = Router();
express.urlencoded({ extended: false });

router.post('/AddProductsToCart/:userId/:productId', AddProductsToCartHandler);
router.get("/getCartProducts/:userId", getCartProductsHandler);
router.post('/placeOrder/:userId', placeOrderHandler);

export { router as default };