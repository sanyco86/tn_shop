import React, {Component} from 'react';

import ProductsFragment from "./ProductsFragment";

import Product from './Product'
import axios from "axios";

export default class Products extends Component {
  state = {
    products:    []
  };

  getProducts() {
    const url = 'http://localhost:8080/products.json';

    axios.get(url)
    .then(response => {
      this.setState({ products : response.data })
    })
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    let { products } = this.state;

    let productsTemplate = products.map(product =>
      <Product
        key={`product-${product.id}`}
        product={product}/>
    );

    return (
      <ProductsFragment>
        {productsTemplate}
      </ProductsFragment>
    )
  }
}
