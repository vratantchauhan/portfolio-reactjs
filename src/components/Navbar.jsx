import React from 'react'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-scroll";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#ffffff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link  smooth={true} to="home" offset={-14} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link >
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} to="about" offset={-14} className="nav-link" href="#">About me</Link >
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} to="services" offset={-14} className="nav-link" href="#">Skills</Link >
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} to="experience" offset={-14} className="nav-link" href="#">Experience</Link >
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} to="projects" offset={-14} className="nav-link" href="#">Projects</Link >
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} to="contact" offset={-14} className="nav-link" href="#">Contact me</Link >
                        </li>
                
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
