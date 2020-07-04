import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
enum OrderStatus {
  'PICKED',
  'SHIPPED',
  'ON_WAY',
  'DELIVERED',
}
export interface IOrder extends Document {
  products: [ObjectId];
  seller: [ObjectId];
  buyer: [ObjectId];
  amount: number;
  deliverCharge: number;
  orderStatus: OrderStatus;
  createdDate: string;
  expectedDeliveryDate: string;
  currentLocation: string;
  pickupLocation: {
    name: string;
    phoneNumber: string;
    place: string;
    apartment: string;
    location: string;
    landmark?: string;
    city: string;
    state: string;
    pinCode: string;
    geoLocation: string;
  };
  deliveryLocation: {
    name: string;
    phoneNumber: string;
    place: string;
    apartment: string;
    location: string;
    landmark?: string;
    city: string;
    state: string;
    pinCode: string;
    geoLocation: string;
  };
}
