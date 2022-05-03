import React from 'react';
import './index.scss';
import lineart from 'assets/images/lineart.png';

const Main = () => {
    return (
        <section className='container-fluid main'>
            <div className='d-flex justify-content-end header'>
                <ul className='d-flex'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='main-sub'>
                <div className='lineart'>
                    <img src={lineart} alt='lineart'></img>
                </div>
                <div className='d-flex justify-content-center align-items-center contents'>
                    <div className='d-flex content'>
                        <span className='first'>Hi there, I am</span>
                        <div className='name-title'>
                            <div className='style-left'></div>
                            <div className='style-right'></div>
                            <span className='second'>Jeanson Avenilla</span>
                            <span className='third'>Software, System & Web Developer</span>
                        </div>
                        <span className='fourth'>
                            An electronics engineer, systems engineer and developer from the Philippines with over three years of experience in the industry. I have a serious passion for coding especially in software, system and full stack web development.
                        </span>
                        <button className='button'>
                            GET IN TOUCH
                            <div className='style-button-line'></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;