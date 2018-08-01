import React from "react";

import MainRoute from "./MainRoute";
import ProductsRoute from "./ProductsRoute";
import ProductRoute from "./ProductRoute";
import CartRoute from "./CartRoute";
import ContactRoute from "./ContactRoute";
import NotFoundRoute from "./NotFoundRoute";

import RouteWithSubRoutes from "./RouteWithSubRoutes";

const routesSettings = [
  MainRoute,
  ProductsRoute,
  ProductRoute,
  CartRoute,
  ContactRoute,
  NotFoundRoute
];

const Routes = () =>
  routesSettings.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);

export default Routes
