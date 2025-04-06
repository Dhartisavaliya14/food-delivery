import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const frontend_url = "http://localhost:5173";

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

        const success_url = `${frontend_url}/verify?success=true&orderId=${newOrder._id}`;
        const cancel_url = `${frontend_url}/verify?success=false&orderId=${newOrder._id}`;

        res.json({ success: true, message: "Order placed successfully", orderId: newOrder._id, success_url, cancel_url });

    } catch (error) {
        console.log("Error placing order:", error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success == "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" })
        }
        else {
            await orderModel.findByIdAndUpdate(orderId);
            res.json({ success: false, message: "Not Paid" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

//user orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

export { placeOrder, verifyOrder, userOrders };
