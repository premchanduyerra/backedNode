import { Router } from 'express';
const router = Router();
/**
 * @desc Create an Oreder
 * @route /order/
 * @type POST
 * @acess "BUYER"
 */
router.post('/');
/**
 * @desc Update the current order Location
 * @route /order/location
 * @type PATCH
 * @access "MAP SDK"
 */
router.patch('/location');
