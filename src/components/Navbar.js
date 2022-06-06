import React, { useState, useEffect } from 'react'

export default function Navbar() {


const [scroll, setScroll] = useState(false)

  useEffect( () => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > 0) {
        setScroll(true)
      }else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
  
  const [active, setActive] = useState(true);
  const navToggle = () => {
      setActive(prevActive => !prevActive)
  }
  return (
    <div className= {`nav-container ${scroll ? "navbar-active" : ''}`}>
    <nav className={`navbar`}>
    <img src={`/images/${active ? 'navlogo2.svg' : 'navlogo-active.svg'}`} alt="" className='nav-logo'/>
      <ul className={active ? 'nav-menu nav-false' : 'nav-menu nav-active'}>
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
    </div>

  )
}


