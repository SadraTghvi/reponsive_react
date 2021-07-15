import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Button from './button';

import "./navbar.css"



function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if( window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    window.addEventListener("resize",showButton)
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRAVEL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                            <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                    {button && <Button ButtonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
