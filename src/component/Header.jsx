import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


function Header(){
    return(
        <>
          <nav>
          <img  className="order-logo" src={`${process.env.PUBLIC_URL}/LOGO-ORDER-ME.png`} alt="Logo" />
        <ul id="menu-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Cart</li>
            <li>Order Tracking</li>
            <li>Help</li>
            <button className="nav-barbtn">
            Sign Up/Login 
        </button>
        </ul>
    <header className="overlay-container">
        <div className='overlay-conatiner-1'>
        <img src={`${process.env.PUBLIC_URL}/customer-service-logo.webp`} alt="Customer Service" className='image'/>
        <div className="overlay">Customer Service</div>
        <img src={`${process.env.PUBLIC_URL}/profile-logo.avif`} alt="Profile"  className='image'/>
        <div className="overlay">Profile</div>
        </div>
    </header>
        </nav>
        <div className='head-1'>
            <div className='head-2'>
                <h1>about to start</h1>
            </div>
        </div>
        </>
    );
}

export default Header
