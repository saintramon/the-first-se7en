import React from 'react'
import './Reveal.css'
import lightbulb from '../../assets/icon/light_bulb.png'

function RevealBtn() {
  return (
    <div>
        <button class = "reveal-btn">
       <img src={lightbulb} alt="Reveal"/> 
       </button>
    </div>
  )
}

export default RevealBtn
