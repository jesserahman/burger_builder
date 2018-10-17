import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css'

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className="BreadBottom"> This is a burger ingredient </div>
      break;
    case ('bread-top'):
      ingredient = <div className="BreadTop"> 
                      <div className="Seeds1" > Seeds </div>
                      <div className="Seeds2" > Seeds </div>
                   </div>
      break;
    case ('meat'):
      ingredient = <div className="Meat"> This is a burger ingredient </div>
      break;
    case ('cheese'):
      ingredient = <div className="Cheese"> This is a burger ingredient </div>
      break;
    case ('salad'):
      ingredient = <div className="Salad"> This is a burger ingredient </div>
      break;
    case ('turkey'):
      ingredient = <div className="Turkey"> This is a burger ingredient </div>
      break;
    default:
      ingredient = null;
  }

  return (ingredient)
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;