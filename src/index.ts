import { PORT } from '../util/config/config';

import app from './api/app';

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
