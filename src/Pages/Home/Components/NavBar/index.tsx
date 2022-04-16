import React, { useState } from 'react';
import './index.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const NavBar = () => {

    const [listClick, setListClick] = useState<boolean>(false);

    return (
        <div className='navbar-home navbar-home-transparent navbar-home-expand'>
            <div className='navbar-home-name'>
                <a className='name' href='/home'>
                    <span>&lt;</span>
                    <span className='name-full'> Jeanson Avenilla </span>
                    <span>/&gt;</span>
                </a>
                <button type='button' className='navbar-home-toggler' onClick={() => setListClick(!listClick)} >
                    {
                        listClick ?
                        <GrClose className='navbar-home-toggler-icon' /> :
                        <AiOutlineMenu className='navbar-home-toggler-icon' />
                    }
                </button>
            </div>
            <ul className={listClick ? 'list list-display' : 'list'}>
                <li>About</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;