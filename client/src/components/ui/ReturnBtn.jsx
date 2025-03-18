import React from 'react'
import './Return.css'
import rtn from '../../assets/bg-img/return_icon.png'

function ReturnBtn() {
  return (
    <div>
        <button class = "btn">
        <img src={rtn} alt="Return"/> 
        </button>
    </div>
  )
}

export default ReturnBtn
