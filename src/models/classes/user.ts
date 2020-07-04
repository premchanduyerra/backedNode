import { Document } from 'mongoose';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePicture: string;
  dob: string;
  verified: boolean;
  adresses: [
    {
      place: string;
      apartment: string;
      location: string;
      landmark?: string;
      city: string;
      state: string;
      pinCode: string;
      geoLocation: string;
    }
  ];
  comparePassword(password: String): Boolean;
}
