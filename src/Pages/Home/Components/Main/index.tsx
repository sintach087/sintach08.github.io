import React from 'react';
import './index.scss';
import lineart from 'assets/images/lineart.webp';
const Reveal = require('react-reveal/Reveal');

const Main = () => {

    const scrollToSection = (section: string) => {
        const sectionPage = document.getElementById(section);
        if (sectionPage)
            sectionPage.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return (
        <section className='container-fluid main'>
            <div className='d-flex justify-content-end header'>
                <ul className='d-flex'>
                    <li className='underline-from-center li-about' onClick={() => scrollToSection('about')}>About</li>
                    <li className='underline-from-center' onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className='underline-from-center' onClick={() => scrollToSection('tools')}>Tools</li>
                    <li className='underline-from-center' onClick={() => scrollToSection('projects')}>Projects</li>
                    <li className='underline-from-center' onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
            <div className='main-sub'>
                <Reveal delay={1000} duration={1200} effect='animate__animated animate__fadeInRight'>
                    <div className='lineart'>
                        <img src={lineart} alt='lineart'></img>
                    </div>
                </Reveal>
                <Reveal effect='fade-in'>
                    <div className='d-flex justify-content-center align-items-center contents'>
                        <div className='d-flex content'>
                            <span className='first'>Hi there, I am</span>
                            <Reveal delay={1000} duration={2000} count={2} effect='animate__animated animate__pulse'>
                                <div className='name-title'>
                                    <div className='style-left'></div>
                                    <div className='style-right'></div>
                                    <h1 className='second'>Jeanson Avenilla</h1>
                                    <h2 className='third'>Software, System & Web Developer</h2>
                                </div>
                            </Reveal>
                            <h3 className='fourth'>
                                An electronics engineer, systems engineer and developer from the Philippines with over three years of experience in the industry. I have a serious passion for coding especially in software, system and full stack web development.
                            </h3>
                            <button className='button' onClick={() => scrollToSection('about')}>
                                GET IN TOUCH
                                <div className='style-button-line'></div>
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Main;