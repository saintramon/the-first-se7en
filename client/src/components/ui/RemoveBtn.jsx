import React from 'react'
import './Remove.css'
import erase from '../../assets/icon/erase.png'

function RemoveBtn() {
  return (
<div>
        <button className = "btn">
       <img src={erase} alt="Previous"/> </button>
</div>
  )
}

export default RemoveBtn
