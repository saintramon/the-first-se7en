import React from 'react'
import logo from "../../assets/icon/litra2code.png"

const Logo  = ({ size = "150px", className = "" }) => {
    return (
      <img
        src={logo}
        alt="Logo"
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
}

export default Logo


// Usage Examples if you want to change the logo size:
// <Logo size="Desired Size of logo" />  


