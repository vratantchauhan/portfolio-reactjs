import React from 'react'
import Typed from "react-typed"
import {Link } from "react-scroll"
function Header() {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>web developer</h1>
                <Typed className="typed-text" 
                strings={["Java Developer", "React Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <Link smooth={true} to="contact" offset={-14} href="" className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    )
}

export default Header
