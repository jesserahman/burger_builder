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
    console.log("ingredient added", type)
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

  render() {
    return (
      <Aux>
        <Burger values={this.state.ingredients} />
        <BuildControls addIngredientProp={this.addIngredient}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;