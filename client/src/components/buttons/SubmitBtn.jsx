import React from 'react';
import '../styles/submit.css';

function SubmitBtn({ onSubmitClick, disabled }) {
  return (
    <button
      className="btn-submit"
      onClick={onSubmitClick}
      disabled={disabled}>
      SUBMIT
    </button>
  );
}

export default SubmitBtn;
