import React from 'react'
import './Reveal.css'
import lightbulb from '../../assets/icon/light_bulb.png'

function RevealBtn({ onRevealClick }) {
  return (
    <div>
        <button 
          className="btn" 
          id = 'btn-reveal'
          onClick={ () => onRevealClick() }>
       <img src={lightbulb} alt="Previous"/> 
       </button>
    </div>
  )
}

export default RevealBtn
