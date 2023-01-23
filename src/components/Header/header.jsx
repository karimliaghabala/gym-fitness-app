import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'

const header = () => {
  return (
    <div>
      <div className='header'>
        <img src={Logo} alt="logo" className='logo' />
        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </div>
  )
}

export default header
