import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideMenu from '../UI/Navigation/SideMenu/SideMenu'

class Layout extends Component {
  state = {
    sideMenu_opened: false
  }

  toggleSideMenu = () => {
    this.setState((prevState) => { 
      return { sideMenu_opened: !prevState.sideMenu_opened}
    });
  }

  render() {
    return (
      <Aux>
        <div>
          {/* Need to create connection from toolbar to side menu */}
          <Toolbar toggleLeftNav={this.toggleSideMenu} /> 
          <SideMenu show={this.state.sideMenu_opened} clicked={this.toggleSideMenu} />
        </div>
        <main className="content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;