import React from 'react'
import logo from '../assets/logo.png' 
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logo'>
            <img src={logo} alt='Logo'></img>

        </div>
        <div className='nav-links'>
            <a href='#'>Home</a>
            <a href='#'>Documents</a>
            <a href='#'>API</a>
            <a href='#'>About</a>
            <a href='#'>Log in</a>
            <button className='sign-up-btn'>Sign Up</button>

        </div>
    </nav>
  )
}

export default Navbar
