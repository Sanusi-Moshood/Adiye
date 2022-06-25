import React from 'react'
import Navbar from '../components/Navbar'
import {Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const SharedRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <section id='footer'>
        <Footer />
      </section>
    </>
  )
}

export default SharedRoute
