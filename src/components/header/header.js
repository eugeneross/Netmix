import React from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import Button from '../button';
import './header.scss';



const Header = (props) => (
    <div className="col-xs-12 headerContainer">
        <RaisedButton label="LOGOUT" onClick={props.onClick} />
    </div>
)

export default Header;
