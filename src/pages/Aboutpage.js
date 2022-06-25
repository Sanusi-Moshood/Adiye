import React from 'react'

const Aboutpage = () => {
  return (
        <div>
                <section id='About'>
        <div className='container'>
            <div className="aboutPage-container">
                <div className="aboutPage-text">
                <h1 className='hero-text' >
                Taking the poultry business <span className='hero-h-text'> online</span> and creating
            <span className='hero-h-text'> global awareness </span>  
          </h1>
          <div className="sub-hero">
              <div className="sub-hero-dash"></div>
              <div >
                  <p className='hero-s-text'>Being a part of the family meal is a tremendous honor, and we strive for great taste, flavour and satisfaction in every Adiye’s experience</p>            
              </div>              
            </div>
                </div>
                <div className="aboutPage-img">
                    <img src="/images/ceo.svg" alt="" />
                    <h2>Founder/CEO</h2>
                </div>
            </div>
        </div>
    </section>
    <section id='who'>
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
                Who we are  
              </h1>
              <p className="about-text">
              We are a small business with great potenital aimed at bringing the poultry world in local countries online, helping wholesalers, retailers and consumers and feeding over 1 million homes 
              </p>
              <br />  
          </div>
          <div className="about-stroke about-stroke-2"></div>
      </div>
    </div>
    </section>
        </div>
  )
}

export default Aboutpage
