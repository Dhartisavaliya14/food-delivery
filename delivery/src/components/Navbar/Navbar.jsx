import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        // header
        <div className='navbar'>

            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar_menu">
                <li>home</li>
                <li>menu</li>
                <li>mobile-app</li>
                <li>Contact us</li>
            </ul>

            {/*  */}
            <div className='navbar_right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>

                <div>
                    <button>sing in</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar
