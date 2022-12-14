import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import logo from '../../images/logo.png'
import { signup, login } from '../../actions/auth'
import './Auth.css'

const Auth = () => {

  const [isSignup, setisSignup] = useState(false)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  function changeAuth() {
    setisSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email){
      alert("Enter email")
    }
    else if(!password){
      alert("Enter password")
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name, email, password} ,navigate))
    }
    else{
      dispatch(login({email, password}, navigate))
    }
  }


  return (
    <section className='auth-section-main'>

      { isSignup && 
       <div className='auth-about'>
          <h1>Join the Stack Overflow community</h1>
          <p>Get unstuck -- ask a question</p>
          <p>Unlock new privileges like voting and commenting</p>
          <p>Save your favourite tags, filter, and jobs</p>
          <p>Earn reputation and badges</p>
          <p style={{color:"#666767", fontSize:"13px"}}>Collaborate and share knowledge with private group for</p>
          <p style={{color:"#007ac6", fontSize:"13px"}}>Get Stack Overflow for Teams free for up to 50 users</p>
       </div>}

      <div className='auth-section-container'>
       { !isSignup && <img src={logo} alt="logo" width="90" className='login-logo'/>}
      <form onSubmit={handleSubmit}>
        {
          isSignup && (
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input type='text' name='name' id='name' className='auth-sec-input' onChange={(e) => {setname(e.target.value)}}/>
            </label>
            )
        }
      <label htmlFor='email'>
        <h4>Email</h4>
        <input type='email' name='email' id='email' className='auth-sec-input' onChange={(e) => {setemail(e.target.value)}}/>
      </label>

      <label htmlFor='password'>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <h4>Password</h4>
          { !isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>forgot password?</p>}
        </div>
        <input type='password' name='password' id='password' className='auth-sec-input' onChange={(e) => {setpassword(e.target.value)}}/>
        { isSignup && 
          <p style={{color:"#666767", fontSize:"13px"}}>Passwords must contain at least eigth<br/> characters, including at least 1 letter and 1<br/> number</p>
        }
      </label>
      
      { isSignup && (
        <label className='checkbox'>
          <input type='checkbox' />
          <p style={{fontSize:"13px"}}>Opt-in to receive occasional,<br/> product updates, user research invitations,<br/> company announcements, and digests.</p>
        </label>
      )}

      <button type="submit" className='auth-btn'>
        { !isSignup ? "Log In" : "Sign up"}
      </button>
     
      { isSignup && (
      <p style={{color:"#666767", fontSize:"13px"}}>
        By clicking "Sign up", you agree to out 
        <span style={{color:"#007ac6"}}> terms of <br/>service, privacy policy</span> and 
        <span style={{color:"#007ac6"}}> cookie policy</span>
        </p> )}

      </form>

       <p style={{fontSize:"13px"}}>
          { !isSignup ? "Dont have an account?" : "Already have an account?"}
          <button onClick={changeAuth} className='auth-switch-btn' type="button">
          { !isSignup ? "sign up" : "log in"}
          </button>
       </p>

      </div>
    </section>
  )
}

export default Auth