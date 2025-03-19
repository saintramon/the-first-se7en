import React from 'react'
import './Remove.css'
import erase from '../../assets/icon/erase.png'

function RemoveBtn({ onRemoveClick }) {
  return (
<div>
        <button
          className="btn" 
          id = 'btn-reveal'
          onClick={ () => onRemoveClick() }
        >
       <img src={erase} alt="Previous"/> </button>
</div>
  )
}

export default RemoveBtn
