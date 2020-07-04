import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
export interface IDeliveryService extends Document {
  order: ObjectId;
  assignedTo: ObjectId;
  rating: string;
  complaint: [string];
}
