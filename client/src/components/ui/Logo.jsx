import React from 'react'

const Logo  = ({ size = "100px", className = "" }) => {
    return (
      <img
        src="client\src\assets\icon\litra2code.png"
        alt="Logo"
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
}

export default Logo


// Usage Examples if you want to change the logo size:
// <Logo size="Desired Size of logo" />  


