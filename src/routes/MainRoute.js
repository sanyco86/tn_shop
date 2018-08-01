import React from 'react'

import { mainPath } from '../helpers/routes'
import MainPage     from "../components/pages/MainPage"

export default {
  name:  'Main',
  exact:  true,
  strict: true,
  path:   mainPath(),
  render: () => (<MainPage/>)
}
