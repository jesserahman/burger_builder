import React from 'react';
import './CheckoutSummary.css'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary"> 
      <h1> We hope you enjoy the burger </h1>
      <div style={{width: '100%', margin: 'auto'}} >
        <Burger values={props.values}/>
      </div>
      <Button btnType={"Danger"} clicked > CANCEL </Button>
      <Button btnType={"Success"} clicked > CONTINUE </Button>
    </div>
  ) 
}

export default checkoutSummary;