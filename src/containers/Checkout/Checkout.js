import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'


// Have a summary of checkout.. what the user is about to buy
// Price
// Button to cancel
// Button continue
// Rebuild burger in summary
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      turkey: 1
    }
  }

  render(){
    return (
      <div>
        <CheckoutSummary values={this.state.ingredients}/>
      </div>
    )
  }

}

export default Checkout