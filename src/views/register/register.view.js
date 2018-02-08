import React, { Component } from 'react';
import { connect } from 'react-redux'; // to connect to redux store from containers redux.js or any other redux store
import Loader from '../../components/loader/loader';
import Error from '../../components/error/Error';
import renderIf from 'render-if';
import validator from '../../common/utils/validator';
import { selector } from './register.redux';
import registerUser from './register.actions';
import InputField from '../../components/InputField';
import Button from '../../components/button';
import Box from '../../components/Box';
import Modal from '../../components/modal/Modal';
import './register.style.scss';

import styles from './constants';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            tabIndex: 0,
        };
    }

    componentWillMount() {
        const userToken = window.localStorage.getItem('userToken');
        const token = window.localStorage.getItem('token');
        if (userToken !== null || token !== null) {
            if (token.length > 0) {
                this.props.history.push('/');
            } else if (userToken.length > 0) {
                this.props.history.push('/');
            }
        }
    }

    componentWillReceiveProps(np) {
        if (np.userAdded) this.setState({ showModal: true })
    }

    handleChange = (name, value, error) => {
        this.setState({ [name]: value, [error]: '' });
    };

    storeFile = (event) => {
        let data = new FormData();
        data.append('file', event.target.files[0]);
        this.setState({ resume: data })
    };

    onTabChange = (value) => {
        const { history } = this.props;
        this.setState({ tabIndex: value });
        if (value === 1) history.push('/login')
    }

    handleRegister = () => {
        const { fullName, email, password } = this.state;
        const payload = {
            name: fullName,
            email: email,
            password: password,
        };
        debugger;
        const validatedData = validator(payload);
        console.log('data', validatedData);
        if (validatedData.isNameValid && validatedData.emailIsValid && validatedData.passwordIsValid) {
            this.props.registerUser(payload);
        } else {
            this.setState(validatedData);
        }

    };

    render() {
        const { fullName, fullNameErrorMessage, email, password, showModal,
            emailErrorMessage, passwordErrorMessage, tabIndex } = this.state;
        const { isLoading, err } = this.props;
        const renderModel = renderIf(showModal);
        const renderLoader = renderIf(isLoading);
        const renderErrorMessage = renderIf(err !== '');
        return (
            <Box onTabChange={this.onTabChange} tabValue={tabIndex}>
                {renderModel(<Modal history={this.props.history} />)}
                {renderLoader(<Loader />)}
                <div>
                    {renderErrorMessage(<Error error={err} />)}
                    <InputField
                        onChange={this.handleChange}
                        name="fullName"
                        label="Full Name"
                        value={fullName}
                        type="text"
                        errorText={fullNameErrorMessage}
                        errorName="fullNameErrorMessage"
                        hintText="John Smith"
                    />
                    <InputField
                        onChange={this.handleChange}
                        name="email"
                        label="Email"
                        value={email}
                        type="email"
                        errorText={emailErrorMessage}
                        errorName="emailErrorMessage"
                        hintText="you@email.com"
                    />
                    <InputField
                        onChange={this.handleChange}
                        name="password"
                        label="Passwod"
                        value={password}
                        type="password"
                        errorText={passwordErrorMessage}
                        errorName="passwordErrorMessage"
                        hintText="***********"
                    />
                    <Button
                        buttonStyle={styles.buttonStyle}
                        label="SIGN UP"
                        onClick={() => this.handleRegister()}
                        rootStyle={styles.rootStyle}
                    />
                </div>
            </Box>
        )
    }
}

const mapDispatchToProps = {
    registerUser
};

export default connect(selector, mapDispatchToProps)(Register);
