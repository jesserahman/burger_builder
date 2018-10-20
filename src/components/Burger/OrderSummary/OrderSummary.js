import React from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  return (
    <Aux>
      <h3> Your Order </h3>
      <p> A delicous burger with the following ingredients: </p>
      <ul>
        {/* list of all items */}
      </ul>
      <p> Total price: </p>
      <p> Continue to checkout? </p>
      <button> Yes </button>
      <button> No </button>
    </Aux>
  )
}

export default orderSummary;