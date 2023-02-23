import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
        <Link className='navbar-brand' to="/">Login React</Link>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'><NavLink to="/" className='nav-link'>Login</NavLink></li>
            <li className='nav-item'><NavLink to="register" className='nav-link'>Register</NavLink></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar