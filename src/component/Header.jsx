import React from 'react'
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
            <button class="nav-barbtn">
            Sign Up/Login 
        </button>
        </ul>
        <div className='overlay-conatiner-1'>
        <img src={`${process.env.PUBLIC_URL}/customer-service-logo.webp`} alt="Customer Service" className='image'/>
        <div className="hover1" id="hoverText1">Customer Service</div>
        <img src={`${process.env.PUBLIC_URL}/profile-logo.avif`} alt="Profile"  className='image'/>
        <div className="hover1" id="hoverText1">Profile</div>
        </div>
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
