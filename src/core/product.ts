import { Product } from "../models/Product";
import { Types } from "mongoose";
export const createNewProduct = async (
  name: string,
  description: string,
  rating: number,
  rentable: boolean,

  images?: [string],
  reviews?: [string]
) => {};
