import React from 'react';
import './index.scss';
import { WebDev, Desktop, Script } from 'Data/Projects';

const Projects = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center projects'>
            <h1 className='title'>PROJECTS</h1>
            <div className='d-flex dev flex-column'>
                <div className='dev-title'>
                    <img src="https://img.icons8.com/color/96/000000/domain--v1.png" loading='lazy' alt='WWW' />
                    <span>Web Development</span>
                </div>
                {
                    WebDev.map((x,y) => {
                        return (
                            <div className='project d-flex flex-column'>
                                <span>{x.projectname}</span>
                                <p>{x.details}</p>
                                <small><b>Tools:</b> {x.tools}</small>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <div className='dev-title'>
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-desktop-web-hosting-flaticons-lineal-color-flat-icons.png" loading='lazy' alt='WWW' />
                    <span>Desktop Software Development</span>
                </div>
                {
                    Desktop.map((x,y) => {
                        return (
                            <div className='project d-flex flex-column'>
                                <span>{x.projectname}</span>
                                <p>{x.details}</p>
                                <small><b>Tools:</b> {x.tools}</small>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex dev flex-column'>
                <div className='dev-title'>
                    <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-script-advertising-icongeek26-outline-colour-icongeek26.png" loading='lazy' alt='WWW' />
                    <span>Script Development</span>
                </div>
                {
                    Script.map((x,y) => {
                        return (
                            <div className='project d-flex flex-column'>
                                <span>{x.projectname}</span>
                                <p>{x.details}</p>
                                <small><b>Tools:</b> {x.tools}</small>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;