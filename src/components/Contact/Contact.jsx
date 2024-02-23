import React from 'react'
import './Contact.Module.css'
import Container from '../Container/Container'
import { useState } from 'react'
import emailjs from "@emailjs/browser";
const Contact = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [content,setContent] = useState()
    const [message,setMessage] = useState()
    const sendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
          "service_go85gna",
          "template_xgz2ave",
          e.target,
          "PpZTOFvtkDXZuH1A6"
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    return (
        <div className="contact__body" id="contact">
            <Container>
                <span>Contact </span>
                <p>If you want to contact me, you can fill out this form and send me an e-mail.</p>
                <form action="" className='contact__form' onSubmit={sendMail}>
                    <div className="contact__name">
                        <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} name='name' />
                    </div>
                    <div className="contact__emailAddress">
                        <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} name='email'/>
                    </div>
                    <div className="contact__content">
                        <input type="text" placeholder='Content'value={content} onChange={e => setContent(e.target.value)} />
                    </div>
                    <div className="contact__message">
                        <textarea placeholder='Message' cols="30" rows="10" value={message} onChange={e => setMessage(e.target.value)} name='message'></textarea>
                    </div>
                    <button type='submit'> Send </button>
                </form>
            </Container>
        </div>
    )
}

export default Contact