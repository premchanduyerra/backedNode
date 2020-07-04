import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { IUser } from './user';
enum Tag {
  FRAUD,
}
export interface IBuyer extends IUser, Document {
  orders: [ObjectId];
  tag: Tag;
  complaint: string;
}
