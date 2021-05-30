import React from 'react'
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpringBoot from '../icons8-spring-logo.svg'
import Java from '../icons8-java.svg'
import ReactSvg from '../icons8-react.svg'
import RESTapi from '../icons8-rest-api-64.png'
import Selenium from '../icons8-selenium.svg'
import JUnit from '../Junit.png'
import Microservice from '../icons8-network.png'


function Services() {
    return (
        <div id="services" className="services">
            <div className="py-5">
                <div className="container">
                <h1>Skills</h1>
                    <div className="row row-custom">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <img src={Java} alt="" />
                                </div>
                                <h3>Java</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <img src={SpringBoot} alt="" />
                                <h3>Spring Boot</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img src={SpringBoot} alt="" />
                                <h3>Spring MVC</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img className="micropng" src={Microservice} alt="" />
                                <h3>Microservices</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img src={RESTapi} alt="" />
                                <h3>REST API</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img className="png" src={JUnit} alt="" />
                                <h3>JUnit</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img className="selpad" src={Selenium} alt="" />
                                <h3>Selenium</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <img className="png" src={ReactSvg} alt="" />
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
