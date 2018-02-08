import React, { Component } from 'react';
import Modal from 'react-modal';
import CircularProgress from 'material-ui/CircularProgress';

const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      background: 'none',
      border: '0',
      transform: 'translate(-50%, -50%)',
    },
  };

class FullScreenLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            title: '',
            url: '',
            showCloseIcon: false,
        };
    }


    render() {
        const { open, showCloseIcon } = this.state;
        return (
            <div>
                <Modal style={modalStyle}   isOpen={open}>
                    <CircularProgress color="white" size={40} />
                </Modal>
            </div>
        );
    }
}

export default FullScreenLoader;
