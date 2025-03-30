import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
        <div className='sidbar'>

            <div className="sidbar-options">
                <div className="sidbar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </div>

                <div className="sidbar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List Items</p>
                </div>

                <div className="sidbar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
