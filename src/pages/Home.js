import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <section id='home'>
        <Hero />
      </section>
      <section id='about'>
      <About />
      </section>
      <section id='team'>
      <Team />
      </section>
      <section id='contact'>
      <Contact />
      </section>
    </div>
  )
}

export default Home

