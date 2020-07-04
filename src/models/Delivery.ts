import { Schema, Types, Model, model } from 'mongoose';
import { Idelivery } from './classes/delivery';
/**
 * This is an incomplete model,just for testing
 * will be changed later
 */
const deliverSchema = new Schema({
  deliveryService: { type: Types.ObjectId },
  name: {
    type: String,
  },
});
export const Delivery = model<Idelivery>('Delivery', deliverSchema);
