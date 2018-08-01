import React from 'react'

import { cartPath } from '../helpers/routes'
import CartPage     from "../components/pages/CartPage"

export default {
  name:  'Cart',
  exact:  true,
  strict: true,
  path:   cartPath(),
  render: () => (<CartPage/>)
}
