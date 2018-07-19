import React, { Component } from 'react'
import Catalog from '../components/Catalog'
import { products } from '../constants/Products'

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products }
  }
  render(){
    const { products } = this.state;
    return (
      <Catalog products={products} />
    )
  }
}
