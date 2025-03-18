import React from 'react'
import './LogOut.css'
import logoutImg from '../../assets/icon/logout_icon.png'

function LogOutBtn() {
  return (
    <div>
        <button class = "btn">
        <img src={logoutImg} alt="Log out Button"/> </button>
    </div>
  )
}

export default LogOutBtn
