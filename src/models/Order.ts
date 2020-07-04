import { Mongoose, Schema, Types, model } from 'mongoose';
import { IOrder } from './classes/order';
import { types } from 'util';
const orderSchema: Schema = new Schema({
  products: [
    {
      type: Types.ObjectId,
      ref: 'Product',
    },
  ],
  seller: { type: Types.ObjectId, ref: 'Seller' },
  buyer: { type: Types.ObjectId, ref: 'Buyer' },
  amount: {
    type: Number,
  },
  deliveryCharge: {
    type: Number,
  },
  currentLocation: { type: String },
  pickupLocation: {
    name: { type: String, },
    phoneNumber: { type: String, },
    place: { type: String, },
    apartment: { type: String, },
    location: { type: String, },
    landmark: String,
    city: { type: String, },
    state: { type: String, },
    pinCode: { type: String, },
  },
  deliveryLocation: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    place: { type: String, required: true },
    apartment: { type: String, required: true },
    location: { type: String, required: true },
    landmark: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    geoLocation: { type: String, required: true },
  },
  orderStatus: {
    type: String,
    enum: ['PICKED', 'SHIPPED', 'ON_WAY', 'DELIVERED'],
  },
  assignedTo: {
    type: Types.ObjectId,
    ref: 'DeliveryService',
  },
  createdDate: {
    type: String,
  },
  expectedDeliveryDate: {
    type: String,
  },
});
export const Order = model<IOrder>('order', orderSchema);
