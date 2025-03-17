import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            {/* Footer Section */}
            <div className="footer-contect">

                {/* Left side Footer contain */}
                <div className='footer-contect-left'>
                    <img className="footer-logo" src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sequi quae magnam? Saepe officia amet id quam accusantium deserunt minima quaerat voluptatum. Aut, in laborum necessitatibus possimus aspernatur ab quis?</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                {/* Center footer contain */}
                <div className='footer-contect-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacypocicy</li>
                    </ul>

                </div>

                {/* Right side Footer Contain */}
                <div className='footer-contect-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-243-456-7890</li>
                        <li>concate@hungerhub.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @ hungerhub.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
