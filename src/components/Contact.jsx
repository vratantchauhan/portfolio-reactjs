import React, { useState } from 'react'
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form";

function Contact() {
    
    const {register, handleSubmit, formState: { errors }} = useForm();
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_3HI8DwkUTtTgm2kh1Zg8e";
    const [successMessage, setSuccessMessage] = useState("");
    
    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                subject: data.subject,
                email:data.email,
                body:data.body
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Email Sent Successfully. I will contact you as soon as possible.")
          }, (error) => {
              console.log(error.text);
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill in the details to reach me via email.</p>
                <span className="success-message">
                    {successMessage}
                </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                    <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                            <input id="name" type="text" placeholder="Name" name="name" className="form-control" 
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("name", {
                              required: "Please enter your name",
                              maxLength: {
                                value: 20,
                                message:
                                  "Please enter a name with fewer than 20 characters",
                              },
                            })}/>                            
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                            <input id="phone" type="text" placeholder="Phone Number" name="phone" className="form-control" 
                            aria-invalid={errors.phone ? "true" : "false"}
                            {...register("phone", {
                              required: "Please enter your phone number",
                              maxLength: {
                                value: 10,
                                message:
                                  "phone number must be 10 digits long",
                              },
                              minLength:{
                                  value: 10,
                                    message: "phone number must be 10 digits long"
                              }
                            })}/>
                            <div className="line"></div>

                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">
                            <input id="email" type="text" placeholder="Email id" name="email" className="form-control" 
                            aria-invalid={errors.email ? "true" : "false"}
                            {...register("email", {
                              required: "Please enter your email address",
                              pattern: {
                                value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                                message:
                                  "Incorrect email address.",
                              },
                              
                            })}/>
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        <div className="text-center">
                            <input id="subject" type="text" placeholder="Subject" name="subject" className="form-control" 
                            aria-invalid={errors.subject ? "true" : "false"}
                            {...register("subject", {
                              required: "Please enter a subject",
                              maxLength: {
                                value: 50,
                                message:
                                  "Subject must be fewer than 50 characters",
                              },
                            })}/>
                            <div className="line"></div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea type="text" placeholder="Email body" name="body" className="form-control" 
                            aria-invalid={errors.subject ? "true" : "false"}
                            {...register("body", {
                              required: "This email does not contain any body.",
                            })}/>
                            <div className="line"></div>
                        </div>
                       < span className="error-message">
                            {errors.body && errors.body.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Send</button>


                    </div>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Contact
