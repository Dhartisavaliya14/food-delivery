import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <form className='place-order'>

            {/* Place order left side */}

            <div className="place-order-left">
                <p className='title'>Delivery Infomation</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
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
                    <button >PROCEED TO PAYMENT</button>
                </div>
            </div>

        </form>
    )
}

export default PlaceOrder
