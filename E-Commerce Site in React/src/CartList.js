import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';

export default class CartList extends Component {
    render() {
        return (
            <div>
                <Table className="table">
                    <thead>
                        
                        <tr>
                            <th colSpan={this.props.cart.length +1}>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.cart.map(c=>(
                               <tr>
                                  
                                       <th>{c.id} </th>
                                   <th scope="row">{c.productName} </th>
                                   <th ><Button onClick={()=> this.props.removeCart(c)}>Sepetten Sil</Button></th>
                                   
                                   
                               </tr> 
                            ))}
                        
                    </tbody>
                </Table>

            </div>
        )
    }
}
