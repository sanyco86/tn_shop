import React from 'react'

import { productPath } from '../helpers/routes'
import ProductPage     from "../components/pages/ProductPage"

export default {
  name:  'Product',
  exact:  true,
  strict: true,
  path:   productPath(),
  render: ({match}) => <ProductPage {...match.params}/>
}
