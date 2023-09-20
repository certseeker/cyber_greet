import React from 'react'
import { Link } from 'react-router-dom'
import style from "../welcome/Welcome.css"


export default function Welcome() {
  return (
    <div className='overall-page'>
      <h1 className='page-name'>Cyber Greet</h1>
      <div>
        <p className='description'>
          Your one stop for your dream cyber security career upgrade. 
        </p>
      </div>
      <div className='button-box'>
        <Link to="/signup" className='button'>Sign Up</Link>
        <Link to="/login" className='button'>Log In</Link>
      </div>
      

      
    </div>
  )
}
