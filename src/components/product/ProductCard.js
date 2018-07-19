import React from 'react'

import Title   from './Title'
import TextBox from './TextBox'
import Image   from './Image'
import Price   from './Price'

const ProductCard = ({id, title, img, text, price, currency}) => {
  return(
    <div id={`product-${id}`}>
      <Title title={title} />
      <Image img={img} />
      <TextBox text={text} />
      <Price price={price} currency={currency} />
      <button>Купить</button>
    </div>
  )
};

export default ProductCard
