import React from 'react'
import Me from '../me.jpg'
function AboutMe() {
    return (
        <React.Fragment >
            <div id="about" className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-img" src={Me} alt="author..." />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">About me</h1>
                        <p>
                            I am Vratant Chauhan, from Noida, India and currently residing in Arlington, Texas.
                            I have graduated with a Master’s degree in Computer Science from the University of Texas
                            along with experience in website/application development and automated testing. 
                            I have worked on several projects while persuing my Master’s and Bachelor's degree, as a result of which 
                            I have developed skills which will be useful in my professional career. 
                            I am motivated to persue Software Development as a profession and contribute to the society. 
                            As a professional I see my self working as a team player who utilizes communication and positive nature 
                            to work better and build strong relationships with my colleagues.
                    </p>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe
