import React, {Fragment} from 'react'
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";
import Link from "../elements/Link";
import {productPath} from "../../helpers/routes";

const Info = ({product}) =>
  <Fragment>
    <Image image={product.image}/>
    <Link to={productPath(product.id)}><Title title={product.name} /></Link>
    <Price price={product.price} />
  </Fragment>;

export default Info
