import { Schema, model, Model, Types } from 'mongoose';
import { IProduct } from './classes/product';
const productSchema: Schema = new Schema({
  name: {
    type: String,

  },
  description: {
    type: String,

  },
  images: [
    {
      type: String,
    },
  ],
  owner: {
    type: Types.ObjectId,
    ref: 'Seller',
  },
  rating: {
    type: Number,
  },
  complaint: [
    {
      type: String,
    },
  ],
  rentable: {
    type: Boolean,
  },
  available: {
    type: Boolean,
  },
  conditions: {
    type: String,
    enum: ['NEW', 'LIKE_NEW', 'USED', 'REFURBISHED', 'OLD'],
  },
  tag: {
    type: String,
    enum: ['NEW', 'HOT', 'BEST_SELLER'],
  },
  price: {
    type: Number,
  },
  rentPrice: {
    type: Number,
  },
  productDetails: {
    productNo: { type: String },
    licenseNo: { type: String },
    modelName: { type: String },
  },
  draft: Boolean,
});
export const Product = model<IProduct>('product', productSchema);
