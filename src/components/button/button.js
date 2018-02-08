import React from 'react';
import cn from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';
import './button.scss';

const style = {
    buttonStyle: {
        backgroundColor: 'red',
    },
}

const backgroundColor = "rgb(27, 15,102)";
const labelColor = "rgb(255,255,255)";

const Button = (props) => (
    <RaisedButton
        label={props.label}
        onClick={props.onClick}
        width={props.width}
        buttonStyle={props.buttonStyle}
        labelColor={labelColor}
    />
)

export default Button;
