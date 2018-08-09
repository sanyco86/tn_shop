import React, {Component, Fragment} from 'react'
import axios from "axios";
import {URL_PRODUCTS} from '../../constants/API'

import Product from '../Product'
import Gallery from '../Gallery'

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: false
    };
  }

  getProducts() {

    axios.get(URL_PRODUCTS)
    .then(response => {
      let product = response.data.items.find(({fields}) => fields.id === Number(this.props.id)).fields;

      this.setState({ product: product })
    })
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    let { product } = this.state;

    return (
      <Fragment>
        {
          product &&
          <Fragment>
            <Product product={product}/>
            <Gallery images={product.images}/>
          </Fragment>
        }
      </Fragment>
    )
  }
}
