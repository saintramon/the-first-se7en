import React from 'react'
import './LogOut.css'
import LogOutImg from './log_out_img.png'

function LogOutBtn() {
  return (
    <div>
        <button class = "btn">
        <img src={LogOutImg} alt="Log out Button"/> </button>
    </div>
  )
}

export default LogOutBtn
