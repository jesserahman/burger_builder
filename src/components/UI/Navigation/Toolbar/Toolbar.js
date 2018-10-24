import React from 'react';
import './Toolbar.css'
import Logo from '../../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideMenuToggle from '../SideMenu/SideMenuToggle/SideMenuToggle'

const toolbar = (props) => {
  return (
   <header className="Toolbar">
      <SideMenuToggle toggleNav={props.toggleLeftNav}/>
      <div className="ToolbarLogo">
        <Logo/>
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
      
   </header>
  )
}

export default toolbar;