import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2, 
      salad: 1,
      turkey: 2
    }
  }

  render() {
    return (
      <Aux>
        <Burger values={this.state.ingredients} />
        <div> Burger Controls </div>
      </Aux>
    )
  }
}

export default BurgerBuilder;