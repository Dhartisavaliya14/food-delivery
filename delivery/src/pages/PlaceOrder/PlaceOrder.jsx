import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();

        let orderItems = [];
        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                orderItems.push({
                    ...item,
                    quantity: cartItems[item._id]
                });
            }
        });

        let orderData = {
            userId: "USER_ID_HERE", // Replace with the actual user ID from context or props
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 15 + 9 + 23.50,
        };

        try {
            let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });

            if (response.data.success) {
                alert("Order placed successfully!");
                window.location.href = response.data.success_url;
                // navigate(response.data.success_url);
            } else {
                alert("Failed to place order.");
            }
        } catch (error) {
            console.error("Order error:", error);
            alert("Error placing order.");
        }
    };

    return (
        <form onSubmit={placeOrder} className='place-order'>

            {/* Place order left side */}
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
                <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
            </div>

            {/* Place order right side */}
            <div className="place-order-right">
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹ {getTotalCartAmount() === 0 ? 0 : 14}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Platform fee | 3.0 kms</p>
                            <p>₹ {getTotalCartAmount() === 0 ? 0 : 9.00}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>GST and Restaurant Charges</p>
                            <p>₹ {getTotalCartAmount() === 0 ? 0 : 21.50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>To Pay</b>
                            <b>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15 + 9 + 23.50}</b>
                        </div>
                    </div>
                    <button type='submit'>PLACE ORDER</button>
                </div>
            </div>
        </form>
    );
}

export default PlaceOrder;
