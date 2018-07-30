import React from 'react';
import Price from "../product/Price";

const Amount = ({items}) => {
  let totalAmount = items.reduce((accum, item) => {
    return accum + (item.qty * item.price);
  }, 0);

  return(
    <h5>
      Total Amount:
      <Price price={totalAmount} />
    </h5>
  )
};

export default Amount;
