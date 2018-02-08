import React from 'react';
import cn from 'classnames';

import './textbox.scss';

const TextBox = (props) => (
    <div className={props.containerStyle}>
        <p className={cn('textbox_bigText', props.bigTextStyle)}>
           {props.bigText}
        </p>
        <span className={cn('textbox_smallText', props.smallTextStyle)}>
           {props.smallText}
        </span>
    </div>
);

export default TextBox;
