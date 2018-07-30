import React, {Fragment} from 'react'
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";

const Info = ({product}) =>
  <Fragment>
    <Image src={product.image} alt={product.title}/>
    <Title title={product.title} />
    <Price price={product.price} />
  </Fragment>;

export default Info
