import React, {Fragment} from 'react'
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";
import Link from "../elements/Link";
import {productPath} from "../../helpers/routes";

const Info = ({product}) =>
  <Fragment>
    <Image src={product.image} alt={product.title}/>
    <Link to={productPath(product.id)}><Title title={product.title} /></Link>
    <Price price={product.price} />
  </Fragment>;

export default Info
