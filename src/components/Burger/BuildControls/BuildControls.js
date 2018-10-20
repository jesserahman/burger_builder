import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Turkey', type: 'turkey' }
]

const buildControls = (props) => {
  console.log(props)
  return (
    <div className="BuildControls">
      <p> Burger Price: <strong>${props.price.toFixed(2)}</strong> </p>
      Burger Controls
      {controls.map(control =>
        <BuildControl 
          key={control.label} 
          ingredient_label={control.label} 
          // the type is being passed down to every element
          // that way when button is clicked, the type can be passed up
          addIngredient={() => props.addIngredientProp(control.type)}
          removeIngredient={() => props.removeIngredientProp(control.type)}
          // create function to call the other function that was passed down through props
          isButtonDisabled={props.disabledButtonsProp[control.type]} />
          // here just use the prop that contains the result of the previous function
      )}
      <button className="OrderButton" disabled={props.isBurgerEmptyProp}>
        CHECKOUT
      </button>
    </div>
  )
}

export default buildControls;