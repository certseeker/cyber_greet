import React from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <div className='overall-page'>
      <h1>Welcome</h1>
      <div className='button-box'>
        <Link to="/signup" className='button'>Sign Up</Link>
        <Link to="/login" className='button'>Log In</Link>
      </div>
      

      
    </div>
  )
}
