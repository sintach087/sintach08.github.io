import React from 'react';
import './index.scss';
import userimg from 'Images/profilepic.png';

const About = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center about'>
            <div className='about-me'>ABOUT ME</div>
            <div className='desktop'>
                <div className='profilepic d-flex justify-content-center align-items-center flex-column'>
                    <img className='pic' src={userimg} alt="profilepic"/>
                    <ul>
                        <li>
                            <a href='https://github.com/sintach087' target='_blank' rel='noreferrer'>
                                <img src="https://img.icons8.com/glyph-neue/128/000000/github.png" loading='lazy' alt='github'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/sintach08' target='_blank' rel='noreferrer'>
                                <img src="https://img.icons8.com/color/144/000000/facebook-new.png" loading='lazy' alt='facebook'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/sintach_08' target='_blank' rel='noreferrer'>
                                <img src="https://img.icons8.com/color/144/000000/instagram-new--v1.png" loading='lazy' alt='instagram'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/javenill' target='_blank' rel='noreferrer'>
                                <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" loading='lazy' alt='linkendin'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    <span className='aboutme'>ABOUT ME</span>
                    <span className='description'>
                        I graduated from Polytechnic University of the Philippines - Manila (2018) with a degree in BS in Electronics Engineering. I am currently working as a Software Support Engineer in Analog Devices Inc. - General Trias. My main go-to tools for building responsive and scalable software, systems and web applications are React.js and C#.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About;