import './index.scss';
import userimg_xs from 'assets/images/profilepic_xs.webp';
import {
    BsGithub,
    BsFacebook,
    BsInstagram,
    BsLinkedin
} from 'react-icons/bs';
const Reveal = require('react-reveal/Reveal');

const About = () => {
    return (    
        <section className='container-fluid d-flex justify-content-center align-items-center about' id='about'>
            <Reveal duration={1500} effect="animate__animated animate__fadeInUp">
                <h2 className='about-me'>ABOUT ME</h2>
            </Reveal>
            <div className='desktop'>
                <Reveal effect='fade-in'>
                    <div className='profilepic d-flex justify-content-center align-items-center flex-column'>
                        <img 
                            className='pic' 
                            src={userimg_xs}
                            alt="profilepic"
                        />
                        <ul>
                            <li>
                                <a href='https://github.com/sintach087' aria-label="github" target='_blank' rel='noreferrer'>
                                    <BsGithub className='grow img-odd' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/sintach08' aria-label="facebook" target='_blank' rel='noreferrer'>
                                    <BsFacebook className='grow img-even' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/sintach_08' aria-label="instagram" target='_blank' rel='noreferrer'>
                                    <BsInstagram className='grow img-odd' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/javenill' aria-label="linkedin" target='_blank' rel='noreferrer'>
                                    <BsLinkedin className='grow img-even' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Reveal>
                <Reveal effect='fade-in'>
                    <div className='content'>
                        <span className='aboutme'>ABOUT ME</span>
                        <span className='description'>
                            I graduated from Polytechnic University of the Philippines - Manila (2018) with a degree in BS in Electronics Engineering. I am currently working as a Software Support Engineer in Analog Devices Inc. - General Trias. My main go-to tools for building responsive and scalable software, systems and web applications are React.js and C#.
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default About;