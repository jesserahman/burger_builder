import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Turkey', type: 'turkey' }
]

const burgerIngredientControls = controls.map(control =>
  <BuildControl key={control.label} ingredient_label={control.label}/>
)


const buildControls = (props) => {
  return (
    <div className="BuildControls">
      Burger Controls
      {burgerIngredientControls}
    </div>
  )
}

export default buildControls;