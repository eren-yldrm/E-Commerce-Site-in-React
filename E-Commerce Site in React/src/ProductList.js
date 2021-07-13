import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';


export default class ProductList extends Component {
    render() {
        return (
            <div>

                <Table>
                    <thead>
                        <tr>
                            <th>{this.props.current} </th>
                            <th>Product Name</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.product.map(product=>(
                            <tr> 
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <Button onClick={()=> this.props.select(product)} color="info"> Seç</Button>
                            
                        </tr>
                        ))}
                        
                        </tbody>
                        </Table>
            </div>
                    )
    }
}
