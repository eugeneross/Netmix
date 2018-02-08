import React from 'react';
import cn from 'classnames';

import './button.scss';

const Button = (props) => (
    <button className={cn('simplebutton_container', props.buttonStyle)} onClick={props.onClick}>
        {props.label}
    </button>
)

export default Button;
