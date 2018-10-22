import React from 'react';
import './Button.css'

const button = (props) => {
  let button_class_half = "Button ";
  let button_class_full = button_class_half.concat(props.btnType)
  return (
    <button onClick={props.clicked} className={button_class_full}>
      {props.children}
    </button>
  )
}
  
export default button;