import React from 'react'
import logo from '../images/logo.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'><img src={logo} alt='img' /></div>
            <div className='menu'>
                <ul>
                    <li>Main</li>
                    <li>Company</li>
                    <li>Clients</li>
                </ul>
            </div>
            <div className='user'>
                <button>New Company</button>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    )
}


export default Navbar