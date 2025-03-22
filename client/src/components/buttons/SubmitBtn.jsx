import React from 'react';
import '../styles/submit.css';

function SubmitBtn({ onSubmitClick, disabled }) {
  return (
    <div>
      <button
        id="btn-submit"
        onClick={onSubmitClick}
        disabled={disabled} 
        className={disabled ? "disabled-btn" : ""} 
      >
        SUBMIT
      </button>
    </div>
  );
}

export default SubmitBtn;
