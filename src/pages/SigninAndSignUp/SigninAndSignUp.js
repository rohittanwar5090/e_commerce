import React from 'react'
import Signin from '../../components/sign-in/Signin'
import Signup from '../../components/sign-up/Signup'
import './SigninAndSignUp.css'
function SigninAndSignUp() {
  return (
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <Signup/>
    </div>
  )
}

export default SigninAndSignUp