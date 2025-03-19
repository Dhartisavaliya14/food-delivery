import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState('Home')

    return (
        // left side navbar menu
        <div className='navbar'>

            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar_menu">
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
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
