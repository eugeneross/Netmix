import React, { Component } from 'react';
import { connect } from 'react-redux'; // to connect to redux store from containers redux.js or any other redux store
import validator from '../../common/utils/validator';
import renderIf from 'render-if';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/loader';
import { loginSelector } from './login.redux';
import authenticateUser from './login.actions';
import InputField from '../../components/InputField';
import Button from '../../components/button';
import Box from '../../components/Box';

import styles from './constants';
debugger;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'msr@msr.in',
            password: '123456',
            tabIndex: 1,
        };
    }

    componentWillMount() {
        const { history } = this.props;
        const token = window.localStorage.getItem('token');
        if (token !== null)
            if (token !== '' && token.length > 0) history.push('/');
    }

    componentWillReceiveProps(np) {
        const { history } = np;
        const token = window.localStorage.getItem('token');
        if (token !== null) if (token !== '' && token.length > 0) history.push('/');

    }

    handleChange = (name, value, error) => {
        this.setState({ [name]: value, [error]: '' });
    };

    onTabChange = (value) => {
        const { history } = this.props;
        this.setState({ tabIndex: value });
        if (value === 0) history.push('/register')
    }

    handleLogin = () => {

        const payload = {
            email: this.state.email,
            password: this.state.password,
        };
        const validatedData = validator(payload);
        if (validatedData.emailIsValid && validatedData.passwordIsValid) {
            this.props.authenticateUser(payload, this.props.usedFor);
        } else {
            this.setState(validatedData);
        }
    };

    render() {
        const { email, password, emailErrorMessage, passwordErrorMessage, tabIndex } = this.state;
        const { isLoading, err } = this.props;
        const renderLoader = renderIf(isLoading);
        const renderErrorMessage = renderIf(err !== '');
        console.log(styles);
        return (
            <Box onTabChange={this.onTabChange} tabValue={tabIndex}>
                {renderLoader(<Loader />)}
                <div>
                    {renderErrorMessage(<Error error={err} />)}
                    <InputField
                        onChange={this.handleChange}
                        name="email"
                        label="Enter Email"
                        value={email}
                        type="text"
                        errorText={emailErrorMessage}
                        errorName="emailErrorMessage"
                        hintText="you@email.com"
                    />
                    <InputField
                        onChange={this.handleChange}
                        name="password"
                        label="Password"
                        value={password}
                        type="password"
                        errorText={passwordErrorMessage}
                        errorName="passwordErrorMessage"
                        hintText="*************"
                    />
                    <Button
                        buttonStyle={styles.buttonStyle}
                        label="SIGN IN"
                        onClick={() => this.handleLogin()}
                        rootStyle={styles.rootStyle}
                    />
                </div>
            </Box>
        )
    }
}

const mapDispatchToProps = {
    authenticateUser
};

export default connect(loginSelector, mapDispatchToProps)(Login);
