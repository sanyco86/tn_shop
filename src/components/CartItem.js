import React, {Component} from 'react';

import Price        from "./product/Price";
import Title        from "./product/Title";
import Image        from "./product/Image";
import Quantity     from "./cart/Quantity";
import Total        from "./cart/Total";

export default class CartItem extends Component {

  render() {
    let {item} = this.props;

    return (
      <tr>
        <td><Image src={item.image} alt={item.title}/></td>
        <td><Title title={item.title} /></td>
        <td><Quantity qty={item.qty}/></td>
        <td><Price price={item.price}/></td>
        <td><Total qty={item.qty} price={item.price}/></td>
      </tr>
    )
  }
}
