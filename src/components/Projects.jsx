import React from 'react'
import Amazonclone from '../amazon-clone.png'
import CovidTracker from '../covid-tracker.png'
import CSAC from '../CSAC.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
function Projects() {

    //amazon-clone
    const openPopupboxAmazon = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Amazonclone} alt="Amazon-Clone" />
                <p>Built an Amazon clone using Firebase for authentication and deployment and
                    payment processing using Stripe API. <br /> Developed using React and state management using Context API with hooks. </p>
                <b>Github: </b><button type="button" class="btn btn-dark" onClick={() => window.open("https://github.com/vratantchauhan/React-amazon-clone")}>Open</button>
            </>

        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Amazon Clone using React",
                },
            },
        });
    }

    const popupboxConfigAmazon = {
        titleBar: {
            enable: true,
            text: "Amazon Clone using React"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //covid-tracker
    const openPopupboxCovidTracker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={CovidTracker} alt="Covid-tracker-SpringBoot" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Delectus sint dignissimos inventore, beatae, tempore eos officia nisi quisquam <br /> nulla consequatur possimus magnam voluptate quidem fuga nostrum repellendus cum expedita minima.</p>
                <b>Github: </b><button type="button" class="btn btn-dark" onClick={() => window.open("https://github.com/vratantchauhan/covid-tracker")}>Open</button>
            </>

        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Covid-tracker using SpringBoot",
                },
            },
        });
    }

    const popupboxConfigCovidTracker = {
        titleBar: {
            enable: true,
            text: "Covid-tracker using SpringBoot"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxCsac = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={CSAC} alt="Event-booking-webApp" />
                <p>Developed and thoroughly tested a Cruise ship event booking web-app. Started with requirement elicitation and followed an Agile approach. <br /> Developed using Java, JSP, JDBC, Selenium, JUnit, JaCoCo, MVC design pattern, MySQL. </p>
                <b>Github: </b><button type="button" class="btn btn-dark" onClick={() => window.open("https://github.com/vratantchauhan/Cruise-Ship-Activity-Coordination-system")}>Open</button>
            </>

        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Event booking Web App using Java.",
                },
            },
        });
    }

    const popupboxConfigCsac = {
        titleBar: {
            enable: true,
            text: "Event booking Web App using Java."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="projects" className="projects-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5"> Projects
                    <div className="image-box-wrapper row justify-content-center">

                        <div className="projects-image-box" onClick={openPopupboxAmazon}>
                            <h3>Amazon Clone</h3>
                            <img src={Amazonclone} alt="Amazon-React-Clone" className="projects-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchengin} />
                        </div>


                        <div className="projects-image-box" onClick={openPopupboxCovidTracker}>
                            <h3>Covid Tracker</h3>
                            <img src={CovidTracker} alt="Covid-tracker-SpringBoot" className="projects-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchengin} />
                        </div>



                        <div className="projects-image-box" onClick={openPopupboxCsac}>
                            <h3>Event Booking</h3>
                            <img src={CSAC} alt="Cruise-Ship-Event-Booking-Java" className="projects-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchengin} />
                        </div>
                    </div>
                </h1>
            </div>

            <PopupboxContainer {...popupboxConfigCovidTracker} />
            <PopupboxContainer {...popupboxConfigAmazon} />
            <PopupboxContainer {...popupboxConfigCsac} />
        </div>
    )
}

export default Projects
