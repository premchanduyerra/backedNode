import { Order } from '../../models/Order';
import { IProduct } from "../../models/classes/product"
import { CartProduct } from "../../models/CartProduct"
import { ObjectId } from 'mongodb';
import { Product } from '../../models/Product';

export const CartProducts = async (

    userId: string


) => {
    try {
        var totalAmount: number = 0
        var products: any = [];
        var x = 0;
        console.log(userId);
        const isUserFound = await CartProduct.findOne({ userId: userId });
        console.log(isUserFound?.productIds);

        isUserFound?.productIds.forEach(async (i) => {
            await Product.findById(i, function (err, data) {
                if (err) {
                    console.log(err);

                }
                x = 1;
                products.push(data);
                console.log(x);





            });

        });
        console.log(x);
        if (x === 1) {
            console.log(products);

            return {
                message: " the productss are:",
                data: products
            }
        }




    } catch (e) {
        console.log(e);
    }
}

