import { Buyer } from '../../models/Buyer';
import jwt from 'jsonwebtoken';
export const logIn = async (email: string, password: string) => {
  try {
    const buyer = await Buyer.findOne({ email });
    let validPassword = buyer?.comparePassword(password);
    if (validPassword) {
      const token = jwt.sign(
        {
          user: buyer,
        },
        'njoy your days regularly',
        {
          expiresIn: '7d',
        }
      );
    }
  } catch (e) {
    console.error(e);
  }
};
