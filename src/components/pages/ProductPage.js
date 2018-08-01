import React, {Component, Fragment} from 'react'
import axios from "axios";

import Product from '../Product'

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: false
    };
  }

  getProducts() {
    const url = 'http://localhost:8080/products.json';

    axios.get(url)
    .then(response => {
      let product = response.data.find((item) => item.id === Number(this.props.id));
      this.setState({ product: product })
    })
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    let { product } = this.state;

    return (
      <Fragment>{product && <Product product={product}/>}</Fragment>
    )
  }
}
