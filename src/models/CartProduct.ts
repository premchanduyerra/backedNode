import { Schema, model, Model, Types } from 'mongoose';
import { cartProduct } from './classes/cartProduct';
import { Product } from "./Product";
import { ObjectId } from 'mongodb';
const cartProductSchema: Schema = new Schema({
    userId: {
        type: String,
        // required: true
    },
    productIds: [
        {
            type: String, required: true

        }




    ]


});
export const CartProduct = model<cartProduct>('cartproduct', cartProductSchema);
