import React from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredients_object = props.values;
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

  return (
    <Aux>
      <h3> Your Order </h3>
      <p> A delicous burger with the following ingredients: </p>
      <ul>
        {burgerIndgredients}
      </ul>
      <p> Total price: {props.price.toFixed(2)} </p>
      <p> Continue to checkout? </p>
      <Button btnType={"Danger"} clicked={props.closeModalProp} > CANCEL </Button>
      <Button btnType={"Success"} clicked={props.continuePurchaseProp}> CONTINUE </Button>
    </Aux>
  )
}

export default orderSummary;