import React, { useState, createRef } from 'react';
import './index.scss';
import { FrontEnd, BackEnd, Others } from 'Data/Skills';
import { GiGraduateCap } from 'react-icons/gi';
import { RiBriefcase4Line } from 'react-icons/ri'

const Skill = () => {

    const frontend = createRef<HTMLDivElement>();
    const backend = createRef<HTMLDivElement>();
    const others = createRef<HTMLDivElement>();

    const [tabActive, setTabActive] = useState<number>(1);

    let frontend_data = FrontEnd;
    let backend_data = BackEnd;
    let others_data = Others;

    return (
        <section className='container-fluid d-flex justify-content-center align-items-center skills'>
            <h1 className='title'>SKILLS</h1>
            <div className='skill-content'>
                <div className='skill-tabs'>
                    <ul className="nav nav-tabs" role="tablist">
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
                        {
                            tabActive === 1 ? 
                            <div className="icons-tab fade show" ref={frontend} aria-labelledby="frontend">
                                {
                                    frontend_data.map((x: any, y: any) => {
                                        return <div className='iconlogo' key={y}>
                                                <img src={x.link} alt={x.alt} width={x.width} height={x.height}/>
                                                <span className="tooltiptext">{x.name}</span>
                                            </div>
                                    })
                                }
                            </div> :
                            tabActive === 2 ?
                            <div className="icons-tab fade show" ref={backend} aria-labelledby="backend">
                            {
                                backend_data.map((x: any, y: any) => {
                                    return <div className='iconlogo' key={y}>
                                                <img src={x.link} alt={x.alt} width={x.width} height={x.height}/>
                                                <span className="tooltiptext">{x.name}</span>
                                            </div>
                                })
                            }
                            </div> :
                            tabActive === 3 ?
                            <div className="icons-tab fade show" ref={others} aria-labelledby="others">
                            {
                                others_data.map((x: any, y: any) => {
                                    return <div className='iconlogo' key={y}>
                                                <img src={x.link} alt={x.alt} width={x.width} height={x.height}/>
                                                <span className="tooltiptext">{x.name}</span>
                                            </div>
                                })
                            }
                            </div> :
                            null
                        }
                    </div>
                </div>
                <div className='personal'>
                    <div className='education'>
                        <div className='titlework'>
                            <GiGraduateCap className='icon'/> <span>Education</span>
                        </div>
                        <span className='course'>BS Electronics Engineering</span>
                        <span className='school'>Polytechnic University of the Philippines (PUP)</span>
                        <span className='location'>Sta. Mesa, Manila</span>
                        <span className='class'>Class of 2018</span>
                    </div>
                    <div className='work'>
                        <div className='titlework'>
                            <RiBriefcase4Line className='icon'/> <span>Work Experience</span>
                        </div>
                        <span className='worktitle'>Software Support Engineer I</span>
                        <span className='company'>Analog Devices Inc - General Trias</span>
                        <span className='render'>April 2019 - Present</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;