import React from 'react'
import NavLink from '../elements/NavLink'
import {
  mainPath,
  productsPath,
  cartPath,
  contactPath
} from '../../helpers/routes'

const Menu = () => (
  <nav>
    <NavLink to={mainPath()}     activeClassName="active">Shopping Cart</NavLink>
    <NavLink to={productsPath()} activeClassName="active">Products</NavLink>
    <NavLink to={cartPath()}     activeClassName="active">Cart</NavLink>
    <NavLink to={contactPath()}  activeClassName="active">Contact</NavLink>
  </nav>
);

export default Menu
