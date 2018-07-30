import React from 'react';

const Table = props => {
  return(
    <table>
      <thead>
      <tr>
        <th colSpan="2">Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      </thead>
      <tbody>
      {props.children}
      </tbody>
    </table>
  )
};

export default Table
