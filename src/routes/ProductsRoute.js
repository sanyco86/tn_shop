import React from 'react'

import { productsPath } from '../helpers/routes'
import ProductsPage     from "../components/pages/ProductsPage"

export default {
  name:  'Products',
  exact:  true,
  strict: true,
  path:   productsPath(),
  render: () => (<ProductsPage/>)
}
