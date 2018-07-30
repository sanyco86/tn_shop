import React from 'react'

const ProductsFragment = props =>
  <div>
    <h5>Products</h5>
    <ul>
      {props.children}
    </ul>
  </div>;

export default ProductsFragment
