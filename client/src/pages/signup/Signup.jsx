import React from 'react';
import SignupForm from '../../components/form/SignupForm';
import logo from '../../assets/icon/logo.png';

function Signup() {
  return (
    <div className='login-container'>
      <img src={logo} alt='Litra2Code logo' className='logo'/>
      <SignupForm />
  </div>
  )
}

export default Signup;