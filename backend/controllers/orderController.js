import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order without Stripe
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        // Save order in database
        await newOrder.save();

        // Clear user's cart after order placement
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order placed successfully", orderId: newOrder._id });

    } catch (error) {
        console.log("Error placing order:", error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
};

export { placeOrder };
