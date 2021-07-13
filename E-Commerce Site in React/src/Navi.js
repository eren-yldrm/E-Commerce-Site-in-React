import React, { Component } from 'react'
import Cart from './Cart';
import {
  
  Navbar,
  
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Navi extends Component {

 
  
  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        
        
          <Nav className="mr-auto" navbar>
            <NavItem>
             <Link to="form"> <NavLink>Form1</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SEPET - {this.props.secilen.length}  
                
              
              </DropdownToggle>
              <DropdownMenu>
                
                <Cart newCart = {this.props.secilen} removeCart={this.props.removeCart}></Cart>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        
      </Navbar>
    </div>
    )
  }
}
