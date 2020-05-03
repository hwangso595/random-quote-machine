import React from 'react';

const Button = (props) => (
    <button className="animate-btn" id="new-quote" onClick={props.clickHandler}>
        {props.buttonDisplayName}
    </button>
);

export default Button;