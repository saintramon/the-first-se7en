import React from 'react'
import '../styles/submit.css'

function SubmitBtn( { onSubmitClick }) {
  return (
    <div>
       <button
          id = 'btn-submit'
          onClick={ () => onSubmitClick() }
       >SUBMIT</button>
    </div>
  )
}

export default SubmitBtn
