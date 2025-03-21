import React from 'react'
import '../styles/true_or_false.css'

function TrueOrFalseBtn({tValue, fVAlue}) {
  return (
    <div class="container">
      <button class="option true" value={tValue}>TRUE</button>
      <span>or</span>
      <button class="option false" value={fVAlue}>FALSE</button>
    </div>
  )
}

export default TrueOrFalseBtn
