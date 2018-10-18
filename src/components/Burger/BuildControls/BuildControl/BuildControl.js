import React from 'react';
import './BuildControl.css'

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label"> {props.ingredient_label} </div>
      <button 
        onClick={props.addIngredient} 
        className="More"> 
        Add 
      </button>
      <button className="Less"> Remove </button>
    </div>
  )
}

export default buildControl;