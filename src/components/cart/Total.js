import React from 'react';
import {formatPrice} from "../../helpers/formatPrice";

const Total = ({price, qty}) => <span>{formatPrice(price * qty)}</span>;

export default Total;
