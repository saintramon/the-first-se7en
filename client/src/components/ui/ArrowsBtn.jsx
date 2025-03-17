import React from 'react'
import Prev from './prev.png'
import Next from './next.png'
import './Arrows.css'

function ArrowsBtn() {
  return (
    <div>
      <button class="btn">
        <img src={Prev} alt="Previous"/>
      </button>
      <button class="btn">
        <img src={Next} alt="Next"/>
      </button>
    </div>
  );
}

export default ArrowsBtn
