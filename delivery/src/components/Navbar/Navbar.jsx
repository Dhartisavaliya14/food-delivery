import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState('Home')

    return (
        // left side navbar menu
        <div className='navbar'>

            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar_menu">
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</li>
            </ul>

            {/* Right side navbar menu */}
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
