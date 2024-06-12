import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


function Header(){
    return(
        <>
          <nav>
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

        </nav>

        </>
    );
}

export default Header