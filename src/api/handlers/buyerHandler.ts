import { Request, Response, RequestHandler } from 'express';
import { signUp } from '../../core/buyer/signUp';
import { logIn } from '../../core/buyer/login';

export const BuyersigninHandler: RequestHandler = async (
  req: Request,
  res: Response
) => {
  let email = req.body.email;
  let password = req.body.password;
  const token = logIn(email, password);
  if (token) {
    res.json({
      success: true,
      message: 'Login Successfull',
      token,
    });
  } else {
    res.json({
      success: false,
      message: 'login failed',
    });
  }
};

export const BuyersignupHandler = async (req: Request, res: Response) => {
  const token = await signUp(req.body.name, req.body.name, req.body.password);
  if (token) {
    res.json({
      success: true,
      message: 'Enjoy your token',
      token,
    });
  }
};
