import { Order } from '../../models/Order';
import { IProduct } from "../../models/classes/product"
import { CartProduct } from "../../models/CartProduct"
import { ObjectId } from 'mongodb';
import { Product } from '../../models/Product';
import { Seller } from '../../models/Seller';
import { IOrder } from "../../models/classes/order"
var mongoose = require('mongoose');
export const placeOrder = async (

    userId: string,
    data: any

) => {
    try {
        //     var totalAmount: number = 0


        console.log(userId);

        console.log(data.deliveryLocation.name);
        var orderId = mongoose.Types.ObjectId();
        console.log(orderId);

        const newOrder = new Order({
            _id: orderId,
            // products: Product.name,
            // seller: Seller,
            // buyer: data.buyer,
            amount: data.amount,
            deliverCharge: data.deliverCharge,
            orderStatus: data.orderStatus,
            createdDate: data.createdDate,
            expectedDeliveryDate: data.expectedDeliveryDate,
            currentLocation: data.currentLocation,
            // pickupLocation: {
            //     name: data.pickupLocation.name,
            //     phoneNumber: data.pickupLocation.phoneNumber,
            //     place: data.pickupLocation.place,
            //     apartment: data.pickupLocation.apartment,
            //     location: data.pickupLocation.location,
            //     landmark: data.pickupLocation.landmark,
            //     city: data.pickupLocation.city,
            //     state: data.pickupLocation.state,
            //     pinCode: data.pickupLocation.pinCode,
            //     geoLocation: data.pickupLocation.geoLocation,
            // },
            deliveryLocation: {
                name: data.deliveryLocation.name,
                phoneNumber: data.deliveryLocation.phoneNumber,
                place: data.deliveryLocation.place,
                apartment: data.deliveryLocation.apartment,
                location: data.deliveryLocation.location,
                landmark: data.deliveryLocation.landmark,
                city: data.deliveryLocation.city,
                state: data.deliveryLocation.state,
                pinCode: data.deliveryLocation.pinCode,
                geoLocation: data.deliveryLocation.geoLocation,
            }
        });
        let x: any;
        console.log('hey');
        // var res = newOrder.save().then(() => {

        //     return {
        //         message: "OrderPlaced",
        //         orderId: orderId
        //     }

        // });
        const employees = await newOrder.save();
        console.log(employees);

        console.log('hey3');

        return {
            message: " order placed ",
            data: employees
        }

    } catch (e) {
        console.log(e);
    }
}

