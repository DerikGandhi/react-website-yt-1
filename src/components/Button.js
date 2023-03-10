import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['button--medium', 'button--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonSytle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to = '/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonSytle} ${checkButtonSize}`}
            onClick={onClick}
            type = {type}
            >
                {children}
            </button>
        </Link>
    )


};