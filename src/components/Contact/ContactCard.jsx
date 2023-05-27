import React from 'react';
import Modal from './Modal';
import { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

import {GrClose} from "react-icons/gr";

const ContactCard = (props) => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '' ,message:''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_58w5zeb', 'template_7q5r68w', form.current, 'TjaMAyoqbmpfVpPNX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setFormData({ name: '', email: '' ,mesage:''});
    };
  return (
    <Modal>
    <div className="contact_right">
    <form ref={form} onSubmit={sendEmail}>
        <div className="cross" onClick={props.onHideCard}><GrClose /></div>
        <h2>Lets Talk.</h2>
<ul>
    <li>
        <label for="name"><span>Name <span class="required-star">*</span></span></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}/>
    </li>
    <li>
        <label for="mail"><span>Email <span class="required-star">*</span></span></label>
        <input type="email" id="mail" name="email" value={formData.email} onChange={handleInputChange}/>
    </li>
    <li>
        <label for="msg"><span>Write your Message</span></label>
        <textarea rows="4" cols="50" name="message" value={formData.mesage} onChange={handleInputChange}></textarea>
    </li>
    <li>
        <input type="submit" value="Send" />
    </li>
</ul>
</form>
    </div>
    </Modal>
  )
}

export default ContactCard