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
  return (
    <div className="BuildControls">
      Burger Controls
      {controls.map(control =>
        <BuildControl 
          key={control.label} 
          ingredient_label={control.label} 
          // the type is being passed down to every element
          // that way when button is clicked, the type can be passed up
          addIngredient={() => props.addIngredientProp(control.type)}
          removeIngredient={() => props.removeIngredientProp(control.type) } />
      )}
    </div>
  )
}

export default buildControls;