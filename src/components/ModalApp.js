import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.toggle}>{this.props.children}</div>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} />
          <ModalBody>
            {this.props.children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalApp;
