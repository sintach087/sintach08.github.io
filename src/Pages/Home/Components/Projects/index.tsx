import React from 'react';
import './index.scss';
import { WebDev, Desktop, Script } from 'Data/Projects';
const Reveal = require('react-reveal/Reveal');

const Projects = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center projects'  id='projects'>
            <Reveal duration={1500} effect="animate__animated animate__fadeInUp">
                <h2 className='title'>PROJECTS</h2>
            </Reveal>
            <div className='d-flex dev flex-column'>
                <Reveal effect="animate__animated animate__fadeInUp">
                    <div className='dev-title'>
                        <img src="https://img.icons8.com/color/96/000000/domain--v1.png" loading='lazy' alt='WWW' />
                        <span>Web Development</span>
                    </div>
                </Reveal>
                {
                    WebDev.map((x, y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project d-flex flex-column'>
                                    <span>{x.projectname}</span>
                                    <p>{x.details}</p>
                                    <small><b>Tools:</b> {x.tools}</small>
                                </div>
                            </Reveal>
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <Reveal effect="animate__animated animate__fadeInUp">
                    <div className='dev-title'>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-desktop-web-hosting-flaticons-lineal-color-flat-icons.png" loading='lazy' alt='WWW' />
                        <span>Desktop Software Development</span>
                    </div>
                </Reveal>
                {
                    Desktop.map((x,y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project d-flex flex-column'>
                                    <span>{x.projectname}</span>
                                    <p>{x.details}</p>
                                    <small><b>Tools:</b> {x.tools}</small>
                                </div>
                            </Reveal>
                            
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <Reveal effect="animate__animated animate__fadeInUp">
                    <div className='dev-title'>
                        <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-script-advertising-icongeek26-outline-colour-icongeek26.png" loading='lazy' alt='WWW' />
                        <span>Script Development</span>
                    </div>
                </Reveal>
                {
                    Script.map((x,y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project d-flex flex-column'>
                                    <span>{x.projectname}</span>
                                    <p>{x.details}</p>
                                    <small><b>Tools:</b> {x.tools}</small>
                                </div>
                            </Reveal>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;