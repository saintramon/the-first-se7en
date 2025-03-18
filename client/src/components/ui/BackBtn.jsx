import React from 'react'
import './Back.css'
import close from '../../assets/icon/close.png'

function BackBtn() {
  return (
    <div>
      <button class = "btn">
              <img src={close} alt="Close Button"/> </button>
    </div>
  )
}

export default BackBtn
