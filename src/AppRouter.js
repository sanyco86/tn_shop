import React from 'react'
import {BrowserRouter as Router, Switch} from "react-router-dom";

import CartContainer from "./components/CartContainer";
import MainLayout    from "./components/layouts/MainLayout";

import Routes from './routes'

const AppRouter = () => (
  <CartContainer>
    <Router>
      <MainLayout>
        <Switch>
          {Routes()}
        </Switch>
      </MainLayout>
    </Router>
  </CartContainer>
);

export default AppRouter
