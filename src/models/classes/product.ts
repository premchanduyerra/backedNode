import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
enum Conditions {
  NEW,
  LIKE_NEW,
  USED,
  REFURBISHED,
  OLD,
}
enum Tag {
  NEW,
  HOT,
  BEST_SELLER,
}
export interface IProduct extends Document {
  name: string;
  description: string;
  images: [string];
  owner: ObjectId;
  rating: number;
  complaint?: [string];
  rentable: boolean;
  available: boolean;
  conditions: Conditions;
  tag: Tag;
  productDetails: {
    productNo: string;
    licenseNo: string;
    modelName: string;
  };
  draft?: boolean;
}
