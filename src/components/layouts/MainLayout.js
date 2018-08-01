import React, {Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = (props) => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
);

export default MainLayout
