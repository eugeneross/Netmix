import React from 'react';
import './error.scss';

const Error = (props) => (
    <div className="errorMessage">
        {props.error}
    </div>
);

export default Error;
