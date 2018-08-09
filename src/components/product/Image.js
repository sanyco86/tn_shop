import React, {Component} from 'react'

import axios from "axios";

import {URL_ASSET, ACCESS_TOKEN} from "../../constants/API";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false
    };
  }

  getImage() {
    axios.get(`${URL_ASSET}/${this.props.image.sys.id}?access_token=${ACCESS_TOKEN}`)
    .then(response => {
      let item = response.data.fields;

      this.setState({ item })
    })
  }

  componentWillMount() {
    this.getImage();
  }

  render() {
    let {item} = this.state;
    return(
      item && <img src={item.file.url} alt={item.title} width='234' height='117'/>
    )
  }
}
