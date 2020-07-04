import { Buyer } from '../../models/Buyer';
import { sign } from 'jsonwebtoken';
export const signUp = async (name: string, email: string, password: string) => {
  let buyer = new Buyer({
    name,
    email,
    password,
  });
  let token: string;
  const userFound = await Buyer.findOne({ email });
  if (!userFound) {
    token = sign(
      {
        user: buyer,
      },
      'njoy your days regularly',
      {
        expiresIn: '7d',
      }
    );
    return token;
  }
};
