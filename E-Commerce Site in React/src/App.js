import React, { Component } from 'react';
import Navi from "./Navi";
import Category from "./Category"
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs"
import NotFound from './NotFound';
import CartList from './CartList';
import Form1 from './Form';

import {
  Switch,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  state = {product: [], current: [] ,cart:[]}
  hesapla = (stok) => {
    
    this.setState({ current: stok.categoryName })
    this.productsGetir(stok.id)
   
  }
  
  componentDidMount() {
    this.productsGetir()
    
  }
  productsGetir = id => {
    
    let url = "http://localhost:3000/products"
    if (id) {
      url+= "?categoryId=" + id
    }
    fetch(url)
      .then(sonuc => sonuc.json())
      .then(sonuc => this.setState({ product: sonuc }))
  }
  select = select2=>{ 
    let newCart = this.state.cart
    
   newCart.map(c=>(
     this.kontrol = c
   ))
    if ( this.kontrol !== select2.productName) {
      newCart.push(select2)
    }
    this.setState({cart:newCart})
    alertify.success(select2.productName + " sepete eklendi")
  }
  removeCart = (cart2)=>{
    let newCart = this.state.cart.filter(c=>c !== cart2)
    this.setState({cart: newCart})
    alertify.error(cart2.productName + " sepetten silindi")
  }
  
  render() {
    return (
      <div>
        <Container>
          <Navi secilen={this.state.cart} removeCart={this.removeCart}></Navi>
            
          
          <Row>
            <Col xs="2">
              <Category secilen={this.state.cart} stokhesap={this.hesapla} current={this.state.current}></Category>
            </Col>
            <Col>
            <Switch>
              <Route exact path="/"><ProductList select={this.select} product={this.state.product} current={this.state.current} /> </Route>
              <Route exact path="/cart"><CartList cart = {this.state.cart} removeCart={this.removeCart}></CartList> </Route>
              <Route path="/form"><Form1></Form1></Route>
              <Route><NotFound></NotFound></Route>
            </Switch>
            
              
            </Col>
            
          </Row>





        </Container>
      </div>
    )
  }
}



