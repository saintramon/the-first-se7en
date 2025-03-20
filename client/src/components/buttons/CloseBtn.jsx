import React from 'react'
import '../styles/close.css'
import close from '../../assets/icon/close.png'

function CloseBtn() {
  return (
    <div>
      <button class = "close-btn">
              <img src={close} alt="Close Button"/> </button>
    </div>
  )
}

export default CloseBtn
