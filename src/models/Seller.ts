import { Schema, Types, model } from 'mongoose';
import { User } from './User';
import { ISeller } from './classes/seller';
const seller = User.discriminator(
  'Seller',
  new Schema({
    products: {
      type: Types.ObjectId,
      refs: 'Product',
    },
    accountBalance: {
      type: Number,
    },
    review: [
      {
        ratings: { type: Number },
        description: String,
      },
    ],
    tag: {
      type: String,
      enum: ['RELIABLE', 'TOP_SELLER', 'TRUSTED'],
    },
  })
);

export const Seller = model<ISeller>('Seller');
