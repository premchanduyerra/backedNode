import { Request, Response, NextFunction, RequestHandler } from 'express';
import { placeOrder } from "../../core/shoppingCart/PlaceOrder";
import { ObjectId } from 'mongodb';
//handler for a geting order details by Id.
export const placeOrderHandler: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = JSON.parse(JSON.stringify(req.body));
    // var data = JSON.parse(req.body.name);
    // console.log(" the data is:");
    //console.log(productInfo.name);
    // console.log(data);

    const order = await placeOrder(
        req.params.userId,
        data

    );


    console.log(order);

    res.json(order);

};

