import * as dotenv from 'dotenv';
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env`;
    break;
  default:
    path = `${__dirname}/../../.env.dev`;
}
dotenv.config({ path });

export const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;
export const PORT = process.env.PORT || 3000;
