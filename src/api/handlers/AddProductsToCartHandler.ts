import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Cart } from "../../core/shoppingCart/AddProductsToCart";
import { ObjectId } from 'mongodb';
//handler for a geting order details by Id.
export const AddProductsToCartHandler: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //const data = JSON.parse(JSON.stringify(req.body));
    // var data = JSON.parse(req.body.name);
    // console.log(" the data is:");
    //console.log(productInfo.name);
    // console.log(data);

    const addToCart = await Cart(
        req.params.userId,
        req.params.productId
    );


    console.log(addToCart);

    res.json(addToCart);

};

