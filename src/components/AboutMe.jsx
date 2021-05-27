import React from 'react'
import Me from '../me.jpg'
function AboutMe() {
    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Me} alt="author..." />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">About me</h1>
                        <p>
                            Software Development Engineer graduated with a Master’s degree in Computer Science
                            from the University of Texas
                            along with experience in website/application development and automated testing.
                    </p>
                        <p>
                            Full stack web developer and testing. Language and frameworks of choice : <br />
                            <strong>Backend: </strong>Java, Spring MVC, Spring Boot, Hibernate  <br />
                            <strong>Frontend: </strong>JavaScript, React <br />
                            <strong>Testing: </strong>JUnit, PIT Mutation, Selenium and JaCoCo code coverage for testing.
                    </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe
