import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
    state = {
        bilgiler: [],
        bilgiler2: []
    };
    componentDidMount() {
        this.kategoriGetir()
    }
    kategoriGetir = () => {
        fetch("http://localhost:3000/categories")
            .then(sonuc => sonuc.json())
            .then(sonuc => this.setState({ bilgiler: sonuc }))
    }
   
    render() {
        return (
            <div>
                <ListGroup >
                    <ListGroupItem >
                        <strong onClick={() => this.props.stokhesap(this.state.bilgiler)}>Kategoriler</strong>
                    </ListGroupItem>
                    
                    {this.state.bilgiler.map(bilgiler => (
                        <ListGroupItem active={bilgiler.categoryName === this.props.current ? true : false} onClick={() => this.props.stokhesap(bilgiler)}>{bilgiler.categoryName} </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

