import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


function Header(){
    return(
        <>
        <div className="header-first">
            <div className='header-container'>
            </div>
        </div>
        <div className="loginp">
            <Link to = "/login"><ul className='text-c'>LOGIN</ul></Link>
            </div>
        </>
    );
}

export default Header