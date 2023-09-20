import React from 'react'
import SignUpForm from '../../components/signup/SignUpForm'


export default function SignUpPage({setUser}) {
  //pass on the set user from App.js from use state
  return (
    <div>
    <h1>Sign Up Page</h1>
    
    <SignUpForm setUser={setUser} />
    </div>
  )
}
//pass down the set user within the sign up form 
