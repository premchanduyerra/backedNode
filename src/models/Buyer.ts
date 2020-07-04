import { Schema, Types, model } from 'mongoose';
import { User } from './User';
import { IBuyer } from './classes/buyer';
const buyer = User.discriminator(
  'Buyer',
  new Schema({
    orders: [
      {
        type: Types.ObjectId,
        ref: 'Order',
      },
    ],
    tag: {
      type: String,
      enum: ['FRAUD'],
    },
    complaint: [
      {
        type: String,
      },
    ],
  })
);
export const Buyer = model<IBuyer>('Buyer');
