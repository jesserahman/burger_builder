import React from 'react';
import './Button.css'

const button = (props) => (
  <button onCLick={props.clicked} className={["Button", "Success"]}>
    {props.children}
  </button>

)

export default button;