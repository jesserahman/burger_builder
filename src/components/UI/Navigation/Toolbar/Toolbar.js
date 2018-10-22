import React from 'react';
import './Toolbar.css'
import Logo from '../../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
  return (
   <header className="Toolbar">
      <div> Menu </div>
      <Logo/>
      <NavigationItems/>
   </header>
  )
}

export default toolbar;