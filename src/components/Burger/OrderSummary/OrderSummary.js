import React from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredients_object = props.values;
  console.log("Ingredients object: ", ingredients_object)
  let burgerIndgredients = Object.keys(ingredients_object).map((ingName, index) => {
    return (<li key={ingName + index}> 
              <span style={{textTransform: 'capitalize'}}>{ingName}</span> : {ingredients_object[ingName]} 
            </li>)
  }
  );

  const flattened_array = burgerIndgredients.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );

  console.log("burger ingredients:", burgerIndgredients)
  console.log("flattened array: ", flattened_array)

  return (
    <Aux>
      <h3> Your Order </h3>
      <p> A delicous burger with the following ingredients: </p>
      <ul>
        {burgerIndgredients}
      </ul>
      <p> Total price: </p>
      <p> Continue to checkout? </p>
      <Button> CANCEL </Button>
      <Button> CONTINUE </Button>
    </Aux>
  )
}

export default orderSummary;