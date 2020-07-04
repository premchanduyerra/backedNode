import { Schema, model } from 'mongoose';
import { IUser } from './classes/user';
const options = {
  discriminatorKey: 'itemtype',
};

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  dob: {
    type: String,
  },
  verfied: {
    type: Boolean,
  },
  adresses: {
    place: { type: String, required: true },
    apartment: { type: String, required: true },
    location: { type: String, required: true },
    landmark: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    geoLocation: { type: String, required: true },
  },
});

userSchema.pre<IUser>('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();
  //   bcrypt.hash(user.password, 'suman', null, function (
  //     err: Error,
  //     hash: string
  //   ) {
  //     if (err) return next(err);

  //     user.password = hash;
  //     next();
  //   });
});

userSchema.methods.comparePassword = function (password: string) {
  return true;
};

export const User = model<IUser>('User', userSchema);
