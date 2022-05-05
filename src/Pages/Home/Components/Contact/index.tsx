import React, { useRef, useEffect } from 'react';
import './index.scss';
import emailjs, { EmailJSResponseStatus, init } from "@emailjs/browser";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Message } from 'common/MessageBox';
const Reveal = require('react-reveal/Reveal');

const Contact = () => {

    const _name = useRef<HTMLInputElement>(null);
    const _email = useRef<HTMLInputElement>(null);
    const _message = useRef<HTMLTextAreaElement>(null);

    const msgbox = new Message();
    const MySwal = withReactContent(Swal);

    const validateEmail = (email: string | any) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const submitForm = async () => {
        if (_name.current || _message.current || _email.current) {
            if (_name.current?.value === "" || _email.current?.value === "" || _message.current?.value === "") {
                msgbox.Error('Kindly fill out other field!');
            }
            else {   
                if (validateEmail(_email.current?.value)) {
                    await MySwal.fire({
                        html: 
                            <div className="d-flex justified-content-center align-items-center p-2">
                                <div>Sending email . . . </div>
                                <div className="spinner-border text-info ms-4" role="status"></div>
                            </div>,
                        allowOutsideClick: false,
                        width: 350,
                        padding: '1em',
                        showCancelButton: false,
                        showConfirmButton: false,
                        didOpen: async () => {
                            await emailjs.send(
                                "service_webportfolio", 
                                "template_webportfolio", 
                                {
                                    name: _name.current?.value,
                                    emailadd: _email.current?.value,
                                    message: _message.current?.value
                                }
                            ).then(
                                (result: EmailJSResponseStatus) => {
                                    msgbox.Success('Message sent successfully.', '');
                                    console.log(`Success: ${result.text} | ${result.status}`);
                                },
                                (error) => {
                                    msgbox.Error(`Error: ${error.text}`);
                                    console.log(`Error: ${error.text}`);
                                }
                            );
                        }
                    });
                }
                else {
                    msgbox.Error('Input email address is invalid!');
                }
            }
        }
        else {
            msgbox.Error('An error occured while initializing form. Please reload the page.');
        }
    }

    useEffect(() => {
        init('PUBLIC_KEY');
    }, []);

    return (
        <section className='container-fluid d-flex justify-content-center align-items-center contact'>
            <Reveal duration={1500} effect="animate__animated animate__fadeInUp">
                <h2 className='title'>CONTACT ME</h2>
            </Reveal>
            <Reveal effect="animate__animated animate__fadeInUp">
                <h3>I'd love to hear from you. Drop me a message!</h3>
            </Reveal>
            <Reveal effect="animate__animated animate__zoomIn">
                <div className='info'>
                    <input className='name' placeholder='Name' ref={_name} />
                    <input className='email' placeholder='Email' ref={_email} />
                    <textarea className='message' placeholder='Message' rows={3} ref={_message} />
                    <button type='button' className='btn btn-info send' onClick={() => submitForm()}>SEND</button>
                </div>
            </Reveal>          
        </section>
    )
}

export default Contact;
