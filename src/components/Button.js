import React from 'react';

const Button = (props) => (
    <button id="new-quote" onClick={props.clickHandler}>{props.buttonDisplayName}</button>
);

export default Button;