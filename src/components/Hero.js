import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
      <div className='container'>
        <div className='hero-container'>
          <h1 className='hero-text' >
            We are committed to helping our customers provide <span className='hero-h-text'>healthy,</span>
            <span className='hero-h-text'> nutritious</span> food for their <span className='hero-h-text'> family.</span>  
          </h1>
          <div className='sub-hero-flex'>
            <div className="sub-hero">
              <div className="sub-hero-dash"></div>
              <div >
                  <p className='hero-s-text'>food innovators who thrive at the intersection of opportunity by upholding the highest standards in poultry.</p>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  href="" className='btn-transparent btn-mr'>Contact</Link>
                  <a href="https://wa.me/09031428651" target={'_blank'} className='btn-transparent'>Order now</a>              
              </div>              
            </div>
            <div className='sub-hero-img'>
              <img src="/images/hero-img.svg" alt="" className='hero-img' />
            </div>
            </div>
        </div>
      </div>
  )
}

export default Hero
