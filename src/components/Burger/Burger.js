import React from 'react';
import BurgerIngredient from './BurgerIndgredients/BurgerIngredient'
import './Burger.css'

const burger = (props) => {
  const ingredients_object = props.values;
  let burgerIndgredients = Object.keys(ingredients_object).map(igName => {
    // returning a new array of arrays
    // the number of new arrays comes from the number of keys
    // each new array will have undefined elements at each index
    // the number of undefined elements at each index comes from the value of the key
    return [...Array(ingredients_object[igName])].map((_, index) => {
      // mapping through a single array of undefined elements
      // each undefined element will be replaced by a burgerIngredient
      // the key of the burgerIngredient will be IngredientName plus the index
      return <BurgerIngredient key={igName + index} type={igName} />
    })
    }
  );

  const flattened_array = burgerIndgredients.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );

  if (!Array.isArray(flattened_array) || !flattened_array.length) {
    burgerIndgredients = <p> Please start adding ingredients </p>
  }

  return (
      <div className='Burger'>
        <BurgerIngredient type="bread-top" />
          {burgerIndgredients}
        <BurgerIngredient type="bread-bottom"/>
      </div>
  )
}

export default burger;