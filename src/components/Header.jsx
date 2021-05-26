import React from 'react'
import Typed from "react-typed";
function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web dev.</h1>
                <Typed className="typed-text" 
                strings={["Java developer", "React developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
