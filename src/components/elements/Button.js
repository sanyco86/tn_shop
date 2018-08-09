import React from 'react'
import { Button as Btn } from 'reactstrap';

const Button = props =>
  <Btn onClick={props.onClick} >{props.text}</Btn>;

export default Button
