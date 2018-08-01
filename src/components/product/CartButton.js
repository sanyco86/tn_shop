import React from 'react'

import CartContext from "../contexts/CartContext";
import Button      from "../elements/Button";

const CartButton = props =>
  <CartContext.Consumer>
    {(cart) => <Button onClick={() => cart.addItemToCart(props.product)} text="В Корзину"/>}
  </CartContext.Consumer>;

export default CartButton
