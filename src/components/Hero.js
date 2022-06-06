import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='container'>
        <div className='hero-container'>
          <p className='hero-text' >
            We are committed to helping our customers provide <span className='hero-h-text'>healthy,</span>
            <span className='hero-h-text'> nutritious</span> food for their <span className='hero-h-text'> family.</span>  
          </p>
          <p className='hero-s-text'>
            At Adiye we are more than chicken were protein leaders. 
          </p>
          <button className='hero-btn'><a href="" >Contact</a></button>
          <button className='hero-btn'><a href="" >Order now</a></button>
           {/* <div><img src="/images/hero-img.svg" alt="" /></div> */}
        </div>
        {/* <div><img src="" alt="" /></div> */}
      </div>
    </div>
  )
}

export default Hero
