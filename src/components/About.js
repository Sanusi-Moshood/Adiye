import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <div className="about-container">
          <div className="about-partner">
            <span className='about-partner-text'>PROUDLY PARTNERED WITH
              <span className='a-p-t-arrow'>
                <svg width="44" height="11" viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H42.5M42.5 5.5L21 1M42.5 5.5L21 10" stroke="#FF7B00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </span>
            <div className="p-logo-flex">
              <div><img src="/images/Logo-1.svg" alt="" className="about-partner-img" /></div>
              <div><img src="/images/Logo.svg" alt="" className="about-partner-img" /></div>
              <div><img src="/images/Logo-3.svg" alt="" className="about-partner-img" /></div>
              <div><img src="/images/Logo-2.svg" alt="" className="about-partner-img" /></div>     
            </div>
          </div>
          <div className="about-stroke about-stroke-1"></div>
          <div className="about-main">
              <h1 className="about-header">
                About us 
              </h1>
              <p className="about-text">
               We are a small business with great potenital aimed at bringing the poultry world in local countries online, helping wholesalers, retailers and consumers and feeding over 1 million homes
              </p>
              <a href="" className='btn-transparent about-btn'>Learn more</a>   
          </div>
          <div className="about-stroke about-stroke-2"></div>
      </div>
    </div>
  )
}

export default About
