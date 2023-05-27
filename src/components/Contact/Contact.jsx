
import React from 'react';

import "./Contact.css";
import {MdEmail} from "react-icons/md";
import {GrLinkedin,GrTwitter} from "react-icons/gr";
import {RiSendPlaneFill} from "react-icons/ri";


const Contact = (props) => {
  
  return (
    <section className="contact" id='contact'>
        <h1 className="skills_title">Get In Touch</h1>
        <div className="contact_content">
            <div className="contact_left">
                <div className="email">
                    <div className="email_icon"><MdEmail /></div>
                    <h4>work.abhyuday@gmail.com</h4>
                </div>
                <div className="email">
                    <div className="email_icon"><GrLinkedin /></div>
                    <h4>Abhyuday</h4>
                </div>
                <div className="email">
                    <div className="email_icon"><GrTwitter /></div>
                    <h4>@Awwwbhyuday</h4>
                </div>
            </div>
            <div className="send-btn ">
                <div className="send_content">
                <h2>Let´s Connect</h2>
                <h3>Feel free to reach out for collaborations or just a friendly hello 😀</h3>
                </div>
                <button className='btn' onClick={props.onShowCard}>Send Messsage<span><RiSendPlaneFill /></span></button>
            </div>
        </div>
    </section>
  )
}

export default Contact;