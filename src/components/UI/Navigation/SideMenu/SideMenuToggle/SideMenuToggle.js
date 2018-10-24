import React from 'react';
import './SideMenuToggle.css'

const sideMenuToggle = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.toggleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default sideMenuToggle;