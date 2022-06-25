import React from 'react'
import { useState, useEffect } from 'react'

const Invest = () => {

    const [formData, setFormData] = React.useState(
        {firstName: "", email: "", comments: ""}
      )
      const [valid, setValid] = useState(null)
      const [submitted, setSubmitted] = useState(false)
    
     
      
      function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
      }
    
      function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)
    }


    
  return (
    <section id='invest'>
    <div className="container">
        <div className="invest-container">
        <div className="invest-col">
        <h1 className='invest-text' >
        We guarantee <span className='hero-h-text'>transparency, accountability </span>and steady <span className='hero-h-text'>profit.....</span>  
          </h1>
        </div>
        <div className="invest-col">
        <div className="contact-form">
            <div className="form-header">
              <h1>Contact us</h1>
              <p>Lorem ipsum consectetur adipiscing elit. Proin consectetur justo quis </p>
            </div>
            <form action="" className='form' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    placeholder='Your name' 
                    className={`input form-name ${ submitted && formData.firstName ? 'input-valid' : submitted && !valid ? 'input-nValid' : ''}`} 
                    /> <br />
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    id="" 
                    placeholder='Your email' 
                    className={`input form-mail ${ submitted && formData.email ? 'input-valid' : submitted && !valid ? 'input-nValid' : ''}`} /> <br />
                <textarea  
                    id=""  
                    value={formData.comments}
                    onChange={handleChange}
                    name="comments"
                    placeholder='Write about your request'  
                    className={`input textarea ${ submitted && formData.comments? 'input-valid' : submitted && !valid ? 'input-nValid' : ''}`}></textarea>
                <button className='contact-btn'>{submitted && formData.firstName && formData.email && formData.comments ? 'Thank you' : 'Send'}</button>
              </form>
          </div>
        </div>
        </div>
        <div className="about-partner invest-partner">
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
    </div>
        
    </section>
  )
}

export default Invest
