import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='cart'>

            {/* cart item title */}
            <div className="cart-items">
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />

                {/* show food items  */}
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹ {item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹ {item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                                </div>
                                <hr />
                            </div>


                        )
                    }

                })}
            </div>

            {/* cart total section */}
            <div className="cart-bottom">
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
                            <p>₹ {15.00}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Platform fee | 3.0 kms</p>
                            <p>₹ {9.00}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>GST and Restaurant Charges</p>
                            <p>₹ {23.50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>To Pay</b>
                            <b>₹ {getTotalCartAmount() + 15 + 9 + 23.50}</b>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>


                {/* cart promocode */}
                <div className="cart-promocode">
                    <div>
                        <p>If you have promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='Promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
