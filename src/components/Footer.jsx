import React from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 colsm-6">
                        <div className="d-flex">
                            <p>1225 S Pecan St <br /> Arlington, Texas</p>
                        </div>
                        <div className="d-flex">
                            <a href="mailto: vratantkchauhan@gmail.com">vratantkchauhan@gmail.com</a>
                        </div>
                        <div className="d-flex">
                            <a href="tel:4693289122">+1 469-328-9122</a>
                        </div>
                        <div className="d-flex footer-icon-style">
                            <a href="https://www.linkedin.com/in/vratant/"><FontAwesomeIcon className="footer-icon" icon={faLinkedin} /></a>
                            <a href="https://github.com/vratantchauhan?tab=repositories"><FontAwesomeIcon className="footer-icon footer-icon-github" icon={faGithub} /></a>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Home</a>
                                <br />
                                <a href="#" className="footer-nav">About me</a>
                                <br />
                                <a href="#" className="footer-nav">Services</a>
                                
                            </div>
                            <div className="col">
                                <a href="#" className="footer-nav">Experience</a>
                                <br />
                                <a href="#" className="footer-nav">Projects</a>
                                <br />
                                <a href="#" className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
