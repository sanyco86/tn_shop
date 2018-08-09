import React, {Component} from 'react';

import Image    from "./product/Image";
import ModalApp from './ModalApp'

export default class Gallery extends Component {

  render(){
    return(
      this.props.images.map((image) =>
        <ModalApp>
          <Image key={image.sys.id} image={image} />
        </ModalApp>
      )
    )
  }
};
