import React from 'react'
import './login.css'
export const LoginSignup = () => {


  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />


        </div>
        <button>Continue</button>
        <p className="loginsingnup-login">Already have an account?<span>  Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing ,I Agree to use the term & policy</p>
        </div>
      </div>
    </div>
  )
};
// }