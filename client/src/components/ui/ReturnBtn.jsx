import React from 'react'
import './Return.css'
import rtn from './return.png'

function ReturnBtn() {
  return (
    <div>
        <button class = "btn">
        <img src={rtn} alt="Return"/> </button>
    </div>
  )
}

export default ReturnBtn
