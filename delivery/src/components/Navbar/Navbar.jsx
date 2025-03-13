import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>

            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar_menu">
                <li>home</li>
                <li>menu</li>
                <li>Contact us</li>
            </ul>

            <div className='navbar_right'>

                <img src={assets.search_icon} alt="" />

                <div>

                </div>

            </div>

        </div>
    )
}

export default Navbar
