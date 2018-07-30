import React from 'react';

import CartContext from './contexts/CartContext'

import CartItem from "./CartItem";
import Amount from './cart/Amount'
import Table from "./cart/Table";

const Cart = () => (
  <CartContext.Consumer>
    {
      (cart) => (
        <div>
          <Amount items={cart.itemsInCart}/>
          <Table>
            {cart.itemsInCart.map((item) => <CartItem key={item.id} item={item} />)}
          </Table>
        </div>
      )
    }
  </CartContext.Consumer>
);
export default Cart
