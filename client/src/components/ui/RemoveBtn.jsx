import React from 'react'
import './Remove.css'
import erase from '../../assets/icon/erase.png'

function RemoveBtn() {
  return (
<div>
        <button class = "btn">
       <img src={erase} alt="Remove"/> </button>
</div>
  )
}

export default RemoveBtn
