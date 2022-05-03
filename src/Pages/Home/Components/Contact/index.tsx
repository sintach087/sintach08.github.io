import React from 'react';
import './index.scss';

const Contact = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center contact'>
            <h1 className='title'>CONTACT ME</h1>
            <h2>I'd love to hear from you. Drop me a message!</h2>
            <div className='info'>
                <input className='name' placeholder='Name' />
                <input className='email' placeholder='Email' />
                <textarea className='message' placeholder='Message' rows={3}/>
            </div>
            <button className='btn btn-info send'>SEND</button>
        </section>
    )
}

export default Contact;