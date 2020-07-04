import { MONGODB_CONNECTION_URI } from '../../util/config/config';
import { connect, Mongoose, connection } from 'mongoose';

const uri: string = String(MONGODB_CONNECTION_URI);

connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conected to mongoose'))
  .catch(() => console.error('mongoose connection error occured'));
