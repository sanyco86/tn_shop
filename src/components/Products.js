import React, {Component} from 'react';

import ProductsFragment from "./ProductsFragment";

import Product from './Product'
import axios from "axios";
import {URL_PRODUCTS} from '../constants/API'

export default class Products extends Component {
  state = {
    products:    []
  };

  getProducts() {
    axios.get(URL_PRODUCTS)
    .then(response => {
      let products = response.data.items;
      this.setState({ products })
    })
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    let { products } = this.state;

    let productsTemplate = products.map(({fields}) => {
      let product = fields;

      return <Product key={`product-${product.id}`} product={product}/>
      }
    );

    return (
      <ProductsFragment>
        {productsTemplate}
      </ProductsFragment>
    )
  }
}
