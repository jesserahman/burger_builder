import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem active={true} link="/"> Burger Builder </NavigationItem>
      <NavigationItem active={false} link="/"> Checkout </NavigationItem>
    </ul>
  )
}

export default navigationItems;