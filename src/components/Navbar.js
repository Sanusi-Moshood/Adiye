import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
  
  const [active, setActive] = useState(false);
  const navToggle = () => {
      setActive(prevActive => !prevActive)
  }

  useEffect(() => {
    handleshow()
  }, [])

  function handleshow() {
    if(window.innerWidth <= 768){
      setActive(prevActive => !prevActive)
    }
  }

  return (
    <div className= {`nav-container ${scroll ? "navbar-active" : ''}`}>
    <nav className={`navbar`}>
    <img src={`/images/${active ? 'navlogo2.svg' : !active ? 'navlogo-active.svg' : ''}`} alt="" className='nav-logo'/>
      <ul className={active ? 'nav-menu nav-false' : 'nav-menu nav-active'}>
        <li className='nav-item'>
          <NavLink to="/"  href="" className={({ isActive }) => (`nav-link ${isActive && active ? 'nav-link-active' : isActive && !active ? 'nav-link-active2' : ''}`) } onClick={handleshow}>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/about"  href="" className={({ isActive }) => (`nav-link ${isActive && active ? 'nav-link-active' : isActive && !active ? 'nav-link-active2' : ''}`) }  onClick={handleshow}>About</NavLink>
        </li>
        {/* <li className='nav-item'>
          <NavLink to="team"  href="" className={({ isActive }) => (`nav-link ${isActive && active ? 'nav-link-active' : isActive && !active ? 'nav-link-active2' : ''}`) }  onClick={handleshow}>Team</NavLink>
        </li> */}
        <li className='nav-item'>
          <NavLink to="/invest"   href="" className={({ isActive }) => (`nav-link ${isActive && active ? 'nav-link-active' : isActive && !active ? 'nav-link-active2' : ''}`) }  onClick={handleshow}>Invest</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="career"  href="" className={({ isActive }) => (`nav-link ${isActive && active ? 'nav-link-active' : isActive && !active ? 'nav-link-active2' : ''}`) }  onClick={handleshow}>Career</NavLink>
        </li>
      </ul>
      <img src={`/images/${active ? 'hamburger-menu.svg' : 'x-menu.svg'}`}alt="" onClick={navToggle}className='nav-toggle'/>
    </nav> 
    </div>

  )
}














// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-scroll'
// import { NavLink } from 'react-router-dom'
// export default function Navbar() {


// const [scroll, setScroll] = useState(false)

//   useEffect( () => {
//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset
//       if (currentScroll > 0) {
//         setScroll(true)
//       }else {
//         setScroll(false)
//       }
//     }
//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }

//   }, [])
  
//   const [active, setActive] = useState(true);
//   const navToggle = () => {
//       setActive(prevActive => !prevActive)
//   }

//   useEffect(() => {
//     handleshow()
//   }, [])

//   function handleshow() {
//     if(window.innerWidth <= 768){
//       setActive(prevActive => !prevActive)
//     }
//   }

//   return (
//     <div className= {`nav-container ${scroll ? "navbar-active" : ''}`}>
//     <nav className={`navbar`}>
//     <img src={`/images/${active ? 'navlogo2.svg' : 'navlogo-active.svg'}`} alt="" className='nav-logo'/>
//       <ul className={active ? 'nav-menu nav-false' : 'nav-menu nav-active'}>
//         <li className='nav-item'>
//           <Link to="home" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} href="" className='nav-link' onClick={handleshow}>Home</Link>
//         </li>
//         <li className='nav-item'>
//           <Link to="about" spy={true} smooth={true} offset={50} duration={500} href="" className='nav-link' onClick={handleshow}>About</Link>
//         </li>
//         <li className='nav-item'>
//           <Link to="team" spy={true} smooth={true} offset={50} duration={500} href="" className='nav-link' onClick={handleshow}>Team</Link>
//         </li>
//         <li className='nav-item'>
//           <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  href="" className='nav-link' onClick={handleshow}>Contact</Link>
//         </li>
//         <li className='nav-item'>
//           <Link to="job" spy={true} smooth={true} offset={50} duration={500} href="" className='nav-link' onClick={handleshow}>Job</Link>
//         </li>
//       </ul>
//       <img src={`/images/${active ? 'hamburger-menu.svg' : 'x-menu.svg'}`}alt="" onClick={navToggle}className='nav-toggle'/>
//     </nav> 
//     </div>

//   )
// }


