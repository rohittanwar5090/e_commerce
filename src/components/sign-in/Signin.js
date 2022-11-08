import React, { useState } from 'react'
import CustomButton from '../custom-button/CustomButton.js'
import Forminput from '../forminput/Forminput.js'
import { auth, signInWithGoogle } from '../../firebase/firebase-utilis'
import './Signin.css'

function Signin() {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, pwd)          
      setEmail('')
      setPwd('')
    } catch (error) {
      console.log(error);
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value)

    }
    else {
      setPwd(value)
    }

  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <Forminput
          type="text"
          name='email'
          value={email}
          handleChange={handleChange}
          required />

        <label>Password</label>
        <Forminput
          type="text"
          name='password'
          value={pwd}
          handleChange={handleChange}
          required />
        <div className="buttons">
          <CustomButton type="submit" >Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >Sign In with Google </CustomButton>
        </div>

      </form>
    </div>
  )
}

export default Signin