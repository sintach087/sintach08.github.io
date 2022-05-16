import { useState } from 'react';
import './index.scss';
import { Skillsets } from 'assets/data/Skills';
import { GiGraduateCap } from 'react-icons/gi';
import { RiBriefcase4Line } from 'react-icons/ri';
import { AnimatePresence, motion } from "framer-motion";
const Reveal = require('react-reveal/Reveal');

const Skill = () => {
    const [tabActive, setTabActive] = useState<number>(1);

    const variants = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section className='container-fluid d-flex justify-content-center align-items-center skills'  id='skills'>
            <Reveal duration={1500} effect="animate__animated animate__fadeInUp">
                <h2 className='title'>SKILLS & EXPERIENCES</h2>
            </Reveal>
            <div className='skill-content'>
                <Reveal duration={1500} effect={`animate__animated ${window.innerWidth < 992 ? 'animate__slideInLeft' : 'animate__slideInRight'}`}>
                    <div className='skill-tabs'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className={tabActive === 1 ? "nav-link active" : "nav-link"} type="button" onClick={() => setTabActive(1)}>FRONTEND</button>
                            </li>
                            <li className="nav-item">
                                <button className={tabActive === 2 ? "nav-link active" : "nav-link"} type="button" onClick={() => setTabActive(2)}>BACKEND</button>
                            </li>
                            <li className="nav-item">
                                <button className={tabActive === 3 ? "nav-link active" : "nav-link"} type="button" onClick={() => setTabActive(3)}>OTHERS</button>
                            </li>
                        </ul>
                        <div className='icon-container'>    
                            <div 
                                className="icons-tab"
                            >
                                <AnimatePresence initial={false}>
                                {
                                    Skillsets.map((x: any, y: any) => 
                                        (tabActive === x.tab) && (
                                            <motion.div 
                                                className='iconlogo d-flex flex-column text-center'
                                                key={y}
                                                layout
                                                variants={variants}
                                                initial='hidden'
                                                animate='visible'
                                                exit='exit'
                                            >
                                                {
                                                    x.alt === 'sweetalert2' ?
                                                    <img src={y % 2 ? x.linkorange : x.linkgreen} className='icon-img-sweetalert2' alt={x.alt} loading='lazy'/> :
                                                    <x.link className={`icon-img ${y % 2 ? 'icon-img-even' : 'icon-img-odd'}`} />
                                                }                                               
                                                <p className='icon-name'>{x.name}</p>
                                            </motion.div>
                                        )
                                    )
                                }
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <div className='personal'>
                    <Reveal duration={1500} effect={`animate__animated ${window.innerWidth < 992 ? 'animate__slideInRight' : 'animate__slideInLeft'}`}>
                        <div className='education'>
                            <div className='titlework'>
                                <GiGraduateCap className='icon'/> <span>Education</span>
                            </div>
                            <span className='course'>BS Electronics Engineering</span>
                            <span className='school'>Polytechnic University of the Philippines (PUP)</span>
                            <span className='location'>Sta. Mesa, Manila</span>
                            <span className='class'>Class of 2018</span>
                        </div>
                    </Reveal>
                    <Reveal delay={window.innerWidth < 992 ? 0 : 1000} duration={1500} effect={`animate__animated ${window.innerWidth < 992 ? 'animate__slideInRight' : 'animate__slideInLeft'}`}>
                        <div className='work'>
                            <div className='titlework'>
                                <RiBriefcase4Line className='icon'/> <span>Work Experience</span>
                            </div>
                            <span className='worktitle'>Software Support Engineer</span>
                            <span className='company'>Analog Devices Inc - General Trias</span>
                            <span className='render'>April 2019 - Present</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Skill;