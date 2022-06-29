import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <h1 className='error'>
      Error <br /> 
        Page cant be found <br />
    <Link to='/' href="">Back to home</Link>
    </h1>
  )
}

export default Error
