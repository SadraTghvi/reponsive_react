import React, { Children } from 'react'
import "./button.css"
import { Link } from 'react-router-dom'

const STYLES = ["btn--primary","btn--outline"];
const SIZES = ["btn--medium","btn--large"];

export const Button = ({childron,type,onClick,ButtonStyle,buttonSize}) =>{
    const checkButtonStyle = STYLES.include(ButtonStyle) ? ButtonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.include(buttonSize) ? buttonSize : SIZES[0];
    
    return(
        <Link to="/sign-up" className="btn-moblie">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {childron}
            </button>
        </Link>
    )
}