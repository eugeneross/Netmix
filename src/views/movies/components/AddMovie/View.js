import React, { Component } from 'react';
import Modal from 'react-modal';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import InputField from '../../../../components/InputField';

import './styles.scss';

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
            open: false,
            title: '',
            url: '',
            showCloseIcon: false,
        };
    }
    
    showModal = () => {
        this.setState({ open: true })
    }


    render() {
        const { open, showModal, name, nameErrorMessage, movieLink, movieLinkErrorMessage,
         trailerLink, trailerLinkErrorMessage} = this.state;
        return (
            <div>
                <RaisedButton label="ADD MOVIE" onClick={showModal} />
                <Modal style={modalStyle} isOpen={open}>
                   <div className="form_container">
                   <h1>ADD MOVIE</h1>
                   <InputField
                        onChange={this.handleChange}
                        name="name"
                        label="MOVIE NAME"
                        value={name}
                        type="text"
                        errorText={nameErrorMessage}
                        errorName="nameErrorMessage"
                    />
                    <InputField
                        onChange={this.handleChange}
                        name="movieLink"
                        label="MOVIE LINK"
                        value={movieLink}
                        type="text"
                        errorText={movieLinkErrorMessage}
                        errorName="movieLinkErrorMessage"
                    />
                    <InputField
                        onChange={this.handleChange}
                        name="trailerLink"
                        label="TRAILER LINK"
                        value={trailerLink}
                        type="text"
                        errorText={trailerLinkErrorMessage}
                        errorName="trailerLinkErrorMessage"
                    />
                    <DatePicker hintText="RELEASE DATE" />
                   </div> 
                </Modal>
            </div>
        );
    }
}

export default FullScreenLoader;
