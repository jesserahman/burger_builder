import React from 'react';
import BurgerIngredient from './BurgerIndgredients/BurgerIngredient'

const burger = (props) => {
  return (
      <div>
        <p> This is a burger </p> 
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="bread-bottom"/>
      </div>
  )
}

export default burger;