import React, {Component} from 'react'

import CartContext from './contexts/CartContext'
import cloneDeep from "lodash/cloneDeep";

export default class CartContainer extends Component {

  state = { itemsInCart: [] };

  addItemToCart = (product) => {
    let {itemsInCart} = cloneDeep(this.state);
    let checkProduct = itemsInCart.some(item => item.id === product.id);

    if(checkProduct){
      let index = itemsInCart.findIndex((x => x.id === product.id));

      itemsInCart[index].qty = Number(itemsInCart[index].qty) + 1;
    } else {
      itemsInCart.push({...product, qty: 1});
    }

    this.updateCart(itemsInCart);
  };

  updateCart = (itemsInCart) => {
    this.setState({ itemsInCart });
  };

  render() {
    return(
      <CartContext.Provider value={{ itemsInCart: this.state.itemsInCart, addItemToCart: this.addItemToCart }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}
