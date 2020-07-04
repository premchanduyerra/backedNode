import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { IProduct } from "../classes/product"
export interface cartProduct extends Document {
    userId: string,

    productIds: [
        string

    ]
    draft?: boolean;
}