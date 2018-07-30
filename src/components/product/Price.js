import React from 'react';
import {formatPrice} from '../../helpers/formatPrice'

const Price = ({price}) => <span>{formatPrice(price)}</span>;

export default Price;
