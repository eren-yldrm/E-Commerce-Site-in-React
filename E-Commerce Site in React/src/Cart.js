import React, { Component } from 'react'
import {DropdownMenu ,DropdownItem ,Badge} from "reactstrap"
import { Link } from 'react-router-dom'

export default class Cart extends Component {
    
    render() {
        return (
            <div>
                 <DropdownMenu >
                     {this.props.newCart.map(c=>(
                         <DropdownItem > {c.productName} <Badge onClick={()=>this.props.removeCart(c)} className="badge bg-danger">Sil</Badge></DropdownItem>
                     ))}
              
                <DropdownItem><Link to="cart"> Sepete Git</Link></DropdownItem>
              </DropdownMenu>
            </div>
        )
    }
}
