import React from 'react';
import  burgerLogo from '../../assetts/images/burger-logo.png'
import './Logo.css'

const logo = (props) => {
  return (
    <div className="Logo" >
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  )
}

export default logo;