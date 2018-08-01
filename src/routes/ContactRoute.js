import React from 'react'

import { contactPath } from '../helpers/routes'
import ContactPage     from "../components/pages/ContactPage"

export default {
  name:  'Contact',
  exact:  true,
  strict: true,
  path:   contactPath(),
  render: () => (<ContactPage/>)
}
