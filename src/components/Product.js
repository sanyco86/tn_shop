import React, {Component} from 'react';

import Info        from './product/Info';
import CartButton from "./product/CartButton";

export default class Product extends Component {

  handleDragStart = (e) => {
    let {product} = this.props;

    e.dataTransfer.setData('id', product.id)
  };

  render() {
    let {product} = this.props;

    return (
      <li className='product' data-item={product.id} onDragStart={this.handleDragStart} draggable>
        <Info product={product}/>
        <CartButton {...this.props}/>
      </li>
    )
  }
}
