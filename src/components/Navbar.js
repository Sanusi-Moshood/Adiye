import React, { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(true)
  // const [toggleIcon, setToggleIcon] = useState("nav-toggle")

  const navToggle = () => {
      setActive(prevActive => !prevActive)
  }
  return (
    <nav className='navbar'>
    <img src={`/images/${active ? 'navlogo2.svg' : 'navlogo-active.svg'}`} alt="" className='nav-logo'/>
      <ul className={active ? 'nav-menu' : 'nav-menu nav-active'}>
        <li className='nav-item'>
          <a href="" className='nav-link'>Home</a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link'>About</a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link'>Contact</a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link'>Invest</a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link'>Job</a>
        </li>
      </ul>
      <img src={`/images/${active ? 'hamburger-menu.svg' : 'x-menu.svg'}`}alt="" onClick={navToggle}className='nav-toggle'/>
    </nav> 
  )
}


