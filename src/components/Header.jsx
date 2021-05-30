import React from 'react'
import Typed from "react-typed";
function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web developer</h1>
                <Typed className="typed-text" 
                strings={["Java Developer", "React Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <a href="https://www.udemy.com/course/build-portfolio-with-reactjs-and-bootstrap/learn/lecture/24019076#questions" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
