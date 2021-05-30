import React from 'react'

function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2018 - Aug 2018</h3>
                        <p>HARMONIC SOFTWARE PATTERNS | Software Developer <br />
                        (Internship) <br />
                        • Worked in a team and developed web application for the client using Spring
                        MVC and Hibernate. <br />
                        • Tested web applications using JUnit and Selenium.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2017 - Aug 2017</h3>
                        <p>OMAN TRADING ESTABLISHMENTS | Web Developer <br />
                        (Internship) <br />
                        • Created product listings, registration, login, logout for their website using the
                        Agile approach and Model View Controller design pattern. <br />
                        • Worked using Java and Spring Framework.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
