import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { IUser } from './user';
enum Tag {
  RELIABLE,
  TOP_SELLER,
  TRUSTED,
}
export interface ISeller extends IUser, Document {
  products: [ObjectId];
  accountBalance: number;
  review: [
    {
      ratings: number;
      description: string;
    }
  ];
  tag: Tag;
}
