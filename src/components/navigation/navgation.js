import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import renderIf from 'render-if';

import Button from '../button/simpleButton';
import './navigation.scss';

const styles = {
    rootStyle: {
        background: 'yellow',
    },
    labelColor: {
        color: 'white',
    }
    // buttonStyle:{
    //     background: 'none',
    //     border: 'none',
    //     boxShadow: 'none',
    //     color:'red',
    // }
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogedIn: false,
        };
    }
    componentWillMount() {
        const token = window.localStorage.getItem('token');
        if (token !== null) this.setState({ userLogedIn: true });
    }

    
    logout = () => {
        console.log('logout')
        window.localStorage.clear();
        this.setState({ userLogedIn: false })
    };
    

    render() {
        const { userLogedIn } = this.state;
        const renderLogOutButton = renderIf(userLogedIn);
        const renderUserActionButtons = renderIf(!userLogedIn);
        return (
            <div className="col-xs-12 navigation_container">
                <div className="navigation_logoContainer">
                    <img src="http://www.thecodewolves.com/images/logosvg.svg" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="108" height="19" viewBox="0 0 108 19">
                        <text fill="#E15252" fill-rule="evenodd" font-family="BrandonText-Bold, Brandon Text" font-size="24" font-weight="bold" letter-spacing="4.5" transform="translate(-52 -58)">
                            <tspan x="50.636" y="76">NETMI</tspan> <tspan x="145.472" y="76" letter-spacing="3.6">X</tspan>
                        </text>
                    </svg> */}
                </div>
                <div className="navigation_clickableItems">
                    <Button
                        buttonStyle="navigation_links"
                        label="MOVIES"
                    />
                    <Button
                        buttonStyle="navigation_links"
                        label="LATEST"
                    />
                    <Button
                        buttonStyle="navigation_links"
                        label="GENRES"
                    />
                    {renderLogOutButton(
                        <span>
                            <Button
                                onClick={this.logout}
                                buttonStyle="navigation_signup"
                                label="LOG OUT"
                            />
                        </span>)}
                    {renderUserActionButtons(<span>
                        <Link to="/register">
                            <Button
                                buttonStyle="navigation_signup"
                                label="SIGN UP"
                            />
                        </Link>
                        <Link to="/login">
                            <Button
                                buttonStyle="navigation_login"
                                label="LOG IN"
                            />
                        </Link>
                    </span>)}
                </div>
            </div>
        );
    }
}

export default Navigation;
