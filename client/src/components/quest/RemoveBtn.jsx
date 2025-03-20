import React from 'react'
import '../styles/Remove.css'
import erase from '../../assets/icon/erase.png'

function RemoveBtn({ onRemoveClick }) {
  return (
<div>
        <button
          className="btn" 
          id = 'btn-reveal'
          onClick={ () => onRemoveClick() }
        >   
       <img src={erase} alt="Remove"/> </button>
</div>
  )
}

export default RemoveBtn
