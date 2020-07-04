import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
export interface Idelivery extends Document {
  deliveryService: ObjectId;
  name: string;
}
