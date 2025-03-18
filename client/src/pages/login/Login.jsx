import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import logo from '../../assets/icon/logo.png';

function Login() {
  return (
    <div className='login-container'>
      <img src={logo} alt='Litra2Code logo' className='logo'/>
      <LoginForm />
    </div>
  )
}

export default Login