import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {


  return (
    <div className=''>
      <div className='nav-container'>
      <Navbar />
      </div>
      <section className='hero'>
      <Hero />
      </section>

    </div>
  );
}

export default App;
