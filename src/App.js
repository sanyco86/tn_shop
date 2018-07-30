import React, {Component} from 'react';

import CartContainer from "./components/CartContainer";
import Products      from './components/Products'
import Cart          from './components/Cart'

import './styles.css'

export default class App extends Component {

  render() {
    return(
      <CartContainer>
        <Products/>
        <Cart/>
      </CartContainer>
    )
  }
}
