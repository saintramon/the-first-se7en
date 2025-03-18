import React from 'react'
import prev from '../../assets/icon/prev.png'
import next from '../../assets/icon/next.png'
import './Arrows.css'

function ArrowsBtn() {
  return (
    <div>
      <button class="btn">
        <img src={prev} alt="Previous"/>
      </button>
      <button class="btn">
        <img src={next} alt="Next"/>
      </button>
    </div>
  );
}

export default ArrowsBtn
