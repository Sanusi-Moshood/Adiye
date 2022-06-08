import React from 'react'

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
                  <a href="" ><button className='hero-btn btn-mr'>Contact</button></a>
                  <a href=""><button className='hero-btn'>Order now</button></a>              
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
