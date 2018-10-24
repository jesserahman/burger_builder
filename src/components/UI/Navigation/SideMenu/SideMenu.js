import React from 'react';
import './SideMenu.css'
import Logo from '../../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../../hoc/Aux'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const sideMenu = (props) => {
  let sideMenuClass = null;
  props.show ? sideMenuClass = "SideMenu Open" : sideMenuClass = "SideMenu Close"
  
  return (
    <Aux>
      <Backdrop shouldShow={props.show} close={props.clicked} />
      <div className={sideMenuClass}>
        <div className="SideMenuLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>

  )
}

export default sideMenu;