import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';
import sellerRoutes from './routes/sellerRoutes';
import buyerRoutes from './routes/buyerRoutes';
import shoppingCartRoutes from './routes/shoppingCartRoutes';
const app: express.Application = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect("mongodb+srv://admin123:admin123@cluster0-0tqob.mongodb.net/rent2trustDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function (err) {
    if (!err) {
        console.log("connected with database");

    } else {
        console.log(err);

    }
});


app.use('/product', productRoutes);
app.use('/seller', sellerRoutes);
app.use('/buyer', buyerRoutes);
app.use('/shoppingCart', shoppingCartRoutes);
export { app as default };
