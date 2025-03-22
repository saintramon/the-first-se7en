import React from 'react'
import '../styles/next.css'

function NextBtn( {onClick}) {
  return (
    <div>
      <button onClick={onClick}>NEXT</button>
    </div>
  )
}

export default NextBtn
