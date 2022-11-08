import React, { useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utilis'
import CustomButton from '../custom-button/CustomButton.js'
import Forminput from '../forminput/Forminput.js'
import './Signup.css'

function Signup() {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
          setEmail(value)
          
        }
        else if(name === 'displayName') {
            setDisplayName(value)      
        }
        else if(name === 'password') {
            setPwd(value)      
        }
        else if(name === 'Confirm Password') {
            setConfirmPwd(value)      
        }        
    
      }
    const handleSubmit = async e =>{
        e.preventDefault();
        if(pwd !== confirmPwd){
            alert('password dont match')
            return;
        }
        try {
            const {user}  = await auth.createUserWithEmailAndPassword(email , pwd)
            console.log(user);            
           await createUserProfileDocument(user , {displayName}) 
           setEmail('')
           setDisplayName('')
           setPwd('')
           setConfirmPwd('')
        } catch (error) {
            alert("user already registerd");
        }
    }
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')    
    return (
        <div className='sign-up'>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <Forminput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    
                    required
                >
                </Forminput>
                <label htmlFor="">Email</label>
                <Forminput
                    type="text"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    
                    required
                >
                </Forminput>
                <label htmlFor="">Password</label>
                <Forminput
                    type="text"
                    name='password'
                    value={pwd}
                    onChange={handleChange}
                    
                    required
                >
                </Forminput>
                <label htmlFor="">Confirm Password</label>
                <Forminput
                    type="text"
                    name='Confirm Password'
                    value={confirmPwd}
                    onChange={handleChange}
                    
                    required
                >
                </Forminput>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default Signup