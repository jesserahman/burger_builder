import React, {Component} from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log("Order Summary will update");
  }

  render(){
    const ingredients_object = this.props.values;
      let burgerIndgredients = Object.keys(ingredients_object).map((ingName, index) => {
        return (<li key={ingName + index}>
          <span style={{ textTransform: 'capitalize' }}>{ingName}</span> : {ingredients_object[ingName]}
        </li>)
      }
    );

    return (
      <Aux>
        <h3> Your Order </h3>
        <p> A delicous burger with the following ingredients: </p>
        <ul>
          {burgerIndgredients}
        </ul>
        <p> Total price: {this.props.price.toFixed(2)} </p>
        <p> Continue to checkout? </p>
        <Button btnType={"Danger"} clicked={this.props.closeModalProp} > CANCEL </Button>
        <Button btnType={"Success"} clicked={this.props.continuePurchaseProp}> CONTINUE </Button>
      </Aux>
    )
  }
  
}

export default OrderSummary;