import { Schema, Types, Model, model } from 'mongoose';
import { IDeliveryService } from './classes/deliveryService';
const deliveryService: Schema = new Schema({
  order: {
    type: Types.ObjectId,
    ref: 'Order',
  },
  assignedTo: {
    type: Types.ObjectId,
    ref: 'Delivery',
  },
  rating: {
    type: Number,
  },
  complaint: [{ type: String }],
});
export const DeliveryService = model<IDeliveryService>(
  'DeliverService',
  deliveryService
);
