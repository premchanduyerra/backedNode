import { Router } from 'express';
import {
  BuyersignupHandler,
  BuyersigninHandler,
} from '../handlers/buyerHandler';

const router = Router();
router.get('/', (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});
/**
 * @desc This is route to get the list of all buyer or specific buyer if ID provided
 * @route /buyer:id
 * @type GET
 */
router.get('/:id');
/**
 * @desc This is route to Update the list of all buyer or specific buyer if ID provided
 * @route /buyer:id
 * @type GET
 */
router.patch('/:id');
/**
 *@desc Create new orders
 *@route /buyer/order
 *@type POST
 */
router.post('/order');
/**
 * @desc get all the orders or the specific order if ID provided created by the buyer
 * @route /buyer/order:id
 * @type GET
 */
router.get('/order:id');
/**
 * @desc Tag user with tag
 * @route /tag
 * @type POST
 */
router.post('/tag');
/**
 * @desc This is route to signUP users
 * @route buyer/signup
 * @type POST
 */
router.post('/signup', BuyersignupHandler);
/**
 * @desc route to signIn user
 * @route buyer/login
 * @type POST
 */
router.post('/signin', BuyersigninHandler);

export { router as default };
