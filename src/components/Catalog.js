import React from 'react'

import ProductCard from './product/ProductCard'

const Catalog = ({products}) => {
  return products.map(function (product) {
      return <ProductCard key={`productCard-${product.id}`} {...product}/>
    }
  );
};

export default Catalog
