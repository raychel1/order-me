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
            <li>Sign Up</li>
            <li>Help</li>
        </ul>
        </nav>
        </>
    );
}

export default Header