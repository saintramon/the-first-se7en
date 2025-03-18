import React from 'react'
import './Reveal.css'
import lightbulb from '../../assets/icon/light_bulb.png'

function RevealBtn() {
  return (
    <div>
        <button class = "btn">
       <img src={lightbulb} alt="Previous"/> 
       </button>
    </div>
  )
}

export default RevealBtn
