import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.scss'


function Nav() {
  return (
    <div className='nav'>
        <NavLink to='/' className='nav__link'>Home</NavLink>
        <NavLink to='/about' className='nav__link'>About</NavLink>
        <NavLink to='/contact' className='nav__link'>Contact</NavLink>
        <NavLink to='/blog' className='nav__link'>Blog</NavLink>
        <NavLink to='/admin' className='nav__link'>Admin</NavLink>
        <NavLink to='/projects`' className='nav__link'>Projects</NavLink>

    </div>
  )
}

export default Nav