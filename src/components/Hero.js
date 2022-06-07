import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='container'>
        <div className='hero-container'>
          <div className='hero-t'>
          <p className='hero-text' >
            We are committed to helping our customers provide <span className='hero-h-text'>healthy,</span>
            <span className='hero-h-text'> nutritious</span> food for their <span className='hero-h-text'> family.</span>  
          </p>
          <p className='hero-s-text'>food innovators who thrive at the intersection of opportunity by upholding the highest standards in poultry.</p>
           <a href=""><button className='hero-btn'>Contact</button></a>
           <a href=""><button className='hero-btn'>Order now</button></a>
          <img src="/images/hero-img.svg" alt="" className='hero-img' />
          </div>

          <div className='hero-side-logo'>
                      <img src="/images/hero-side-logo.svg" alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
