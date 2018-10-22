import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'

const layout = (props) => {
  return (
    <Aux>
      <div>
        <Toolbar/> 
        Side Menu
      </div>
      <main className="content">
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;