import React from 'react'
import './Remove.css'
import erase from './erase.png'

function RemoveBtn() {
  return (
<div>
        <button class = "btn">
       <img src={erase} alt="Previous"/> </button>
</div>
  )
}

export default RemoveBtn
