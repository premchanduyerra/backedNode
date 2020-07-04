import { Request, Response, NextFunction, RequestHandler } from 'express';
import { CartProducts } from "../../core/shoppingCart/GetCartProducts";
import { ObjectId } from 'mongodb';
//handler for a geting order details by Id.
export const getCartProductsHandler: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //const data = JSON.parse(JSON.stringify(req.body));
    // var data = JSON.parse(req.body.name);
    // console.log(" the data is:");
    //console.log(productInfo.name);
    // console.log(data);

    const cartProducts = await CartProducts(
        req.params.userId

    );
    //console.log(cartProducts);

    res.json(cartProducts);

};

