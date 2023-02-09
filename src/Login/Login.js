import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css'
export default function Login() {
  const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error)=>
      alert(error.messages)
    )

  }

  return (
    <div className='login'>
      <div className='login-container'>
      <div className='login-container-l'>
        <h1>Hey👋, I'm Siddharth Pampana</h1>
        <div>
        <h2>Welcome to live compiler</h2>
        <p>Place where you can save, view, update and edit the Html, Css and Js code on realtime</p></div>
      </div>
      <div className='login-container-r'>
         
         
         <img onClick={signIn} className='login-img' src='https://www.drupal.org/files/issues/2020-01-26/google_logo.png' />  
        
      </div>
      </div>
    </div>
  )
}
 