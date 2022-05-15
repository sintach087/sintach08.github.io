import React from 'react';
import './index.scss';
import { WebDev, Desktop, Script } from 'assets/data/Projects';
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
                        <img src="https://img.icons8.com/ios/100/ff478e/domain.png" loading='lazy' alt='WWW' />
                        <span>Web Development</span>
                    </div>
                </Reveal>
                {
                    WebDev.map((x, y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project-container'>
                                    <img className='project-img' src={x.img} loading='lazy' alt={x.projectname}/>
                                    <div className='project-details'>
                                        <p className='project-name'>{x.projectname}</p>
                                        <div className='line'></div>
                                        <p className='project-description'>{x.details}</p>
                                        <p className='project-tools text-muted'>Tools: {x.tools}</p>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <Reveal effect="animate__animated animate__fadeInUp">
                    <div className='dev-title'>
                        <img src="https://img.icons8.com/ios/100/ff478e/monitor--v1.png" loading='lazy' alt='WWW' />
                        <span>Desktop Software Development</span>
                    </div>
                </Reveal>
                {
                    Desktop.map((x,y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project-container'>
                                    <img className='project-img' src={x.img} loading='lazy' alt={x.projectname}/>
                                    <div className='project-details'>
                                        <p className='project-name'>{x.projectname}</p>
                                        <div className='line'></div>
                                        <p className='project-description'>{x.details}</p>
                                        <p className='project-tools text-muted'>Tools: {x.tools}</p>
                                    </div>
                                </div>
                            </Reveal>
                            
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <Reveal effect="animate__animated animate__fadeInUp">
                    <div className='dev-title'>
                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ff478e/external-script-advertising-icongeek26-outline-icongeek26.png" loading='lazy' alt='WWW' />
                        <span>Script Development</span>
                    </div>
                </Reveal>
                {
                    Script.map((x,y) => {
                        return (
                            <Reveal key={y} duration={1500} effect='animate__animated animate__fadeInUp'>
                                <div className='project-container'>
                                    <img className='project-img' src={x.img} loading='lazy' alt={x.projectname}/>
                                    <div className='project-details'>
                                        <p className='project-name'>{x.projectname}</p>
                                        <div className='line'></div>
                                        <p className='project-description'>{x.details}</p>
                                        <p className='project-tools text-muted'>Tools: {x.tools}</p>
                                    </div>
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