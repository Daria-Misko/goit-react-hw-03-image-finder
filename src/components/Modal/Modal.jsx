import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImage, ModalWrapper } from './Modal.styles';

export class Modal extends Component {
  static = {
    imageModal: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickOverlay}>
        <ModalWrapper>
          <ModalImage src={this.props.imageModal} alt="photo" />
        </ModalWrapper>
      </Overlay>
    );
  }
}
