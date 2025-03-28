import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState('Home')

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        // left side navbar menu
        <div className='navbar'>

            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar_menu">
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
            </ul>

            {/* Right side navbar menu */}
            <div className='navbar_right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                <div>
                    <button onClick={() => setShowLogin(true)}>sing in</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar
