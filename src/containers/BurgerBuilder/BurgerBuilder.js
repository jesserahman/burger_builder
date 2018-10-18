import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.75,
  meat: 1.75,
  turkey: 1.25
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0, 
      salad: 0,
      turkey: 0
    },
    total_price: 4
  }

  addIngredient = (type) => {
    // get the current count for ingredient type
    const ingredient_current_count = this.state.ingredients[type];
    // get the new count for ingredient type
    const new_ingredient_count = ingredient_current_count + 1;
    // create copy of the ingredients objet
    const new_ingredients_object = {...this.state.ingredients};
    // set the count of the ingredient to the new ingredient count
    new_ingredients_object[type] = new_ingredient_count;
    const new_total_price = this.state.total_price + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: new_ingredients_object,
      total_price: new_total_price
    });
  }

  removeIngredient = (type) => {
    // get current count 
    const current_ingredient_count = this.state.ingredients[type]
    // check current count of ingredient, make sure it doesn't go below 0

    let new_ingredient_count = current_ingredient_count;
    let new_total_price = this.state.total_price;

    if (current_ingredient_count !== 0){
      new_ingredient_count = current_ingredient_count - 1;
      new_total_price = this.state.total_price - INGREDIENT_PRICES[type];
    }
  
    // get current ingredient state
    const new_ingredients_object = {...this.state.ingredients}
    new_ingredients_object[type] = new_ingredient_count;
    // set new state
    this.setState({
      ingredients: new_ingredients_object,
      total_price: new_total_price
    })    
  }

  changeToBoolean = () => {
    const current_ingredients_object = {...this.state.ingredients}
    for (let ingredient in current_ingredients_object) {
      if (current_ingredients_object[ingredient] === 0) {
        current_ingredients_object[ingredient] = true
      } else {
        current_ingredients_object[ingredient] = false
      }
    }
    return current_ingredients_object
  }

  render() {
    return (
      <Aux>
        <Burger values={this.state.ingredients} />
        <BuildControls 
          price={this.state.total_price}
          addIngredientProp={this.addIngredient} 
          removeIngredientProp={this.removeIngredient}
          disabledButtonsProp={this.changeToBoolean()} />
      </Aux>
    )
  }
}

export default BurgerBuilder;