import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// CSS Classes for buttons 
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

// logic to check if button has specified style/size, 
// if it does logic uses specified style/size
// if it does not logic sets default from STYLES/SIZES arrays
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    return (
        <Link to='/sign-up' className='btn-mobile'>
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
        </Link>
    );
};

export default Button