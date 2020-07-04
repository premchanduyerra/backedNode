import { Order } from '../../models/Order';
import { IProduct } from "../../models/classes/product"
import { CartProduct } from "../../models/CartProduct"
import { ObjectId } from 'mongodb';

export const Cart = async (

    userId: string,
    productId: string

) => {
    try {

        console.log(userId);
        console.log(productId);
        const isUserFound = await CartProduct.find({ userId: userId });
        console.log(isUserFound);
        let k = 0;
        // if the user is already found then pushes the product id in to userid collection
        if (isUserFound.length !== 0) {
            var status = "";

            console.log("userfound");
            var d = await CartProduct.updateOne({ userId: userId }, { $push: { productIds: productId } });

            console.log(d);


            return {

                status: "success updated"
            }



        }
        //if user is not found  create user collection
        else {
            var status = "";
            console.log("user not found");
            var cartItem = new CartProduct({
                userId: userId,
                productIds: [productId]
            });
            cartItem.save(function (err) {
                if (err) {
                    console.log(err);

                } else {

                    status = "succes added";
                }

            });
            return {
                success: "added",
                status: status
            }
        }



    } catch (e) {
        console.log(e);
    }
}

