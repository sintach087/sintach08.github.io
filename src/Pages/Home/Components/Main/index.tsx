import { useState, useEffect } from 'react';
import './index.scss';
import { navlinks } from 'assets/data/Links';
import { AiOutlineMenu } from 'react-icons/ai';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import lineart_sm from 'assets/images/lineart_sm.webp';
import logo from 'assets/images/logo.webp';
import ImagePreloader from 'common/ImagePreloader';
const Reveal = require('react-reveal/Reveal');

const Main = () => {

    const scrollToSection = (section: string) => {
        const sectionPage = document.getElementById(section);
        setNavLinkMobile(false);
        if (sectionPage)
            sectionPage.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    const [navLinkMobile, setNavLinkMobile] = useState<boolean>(false);

    const animation = useAnimation();
    const dummyVariants = {
        hidden: {},
        visible: {},
    };

    const parentMotion = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "ease",
            },
        },
        exit: {
            opacity: 0,
        },
    };
    
    const ulMotion = {
        hidden: {
          x: "-100%",
        },
        visible: {
            x: "0%",
            transition: {
                type: "spring",
                damping: 40,
                stiffness: 300,
            },
        },
        exit: {
          x: "-100%",
        },
    };

    const slideUp = (delay = 0) => {
        return {
          hidden: {
            y: "100%",
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                mass: 1,
                damping: 8,
                stiffness: 20,
                delay,
            },
          },
        };
    };

    const slideMotion = (delay = 0, direction = 'left') => {
        return {
            hidden: {
                x: direction === 'left' ? '-100%' : '100%',
                opacity: 0,
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  mass: 1,
                  damping: 8,
                  stiffness: 20,
                  delay
                },
            },
        }
    };

    const slideMotion2 = {
        hidden: {
            x: '-100%',
            opacity: 0,
        },
        visible: {
            x: ['-100%', '400%', '-100%', '70%', '0%'],
            opacity: 1,
            transition: {
              type: "spring",
              mass: 1,
              damping: 8,
              stiffness: 20,
              delay: 4,
              duration: 3,
              times: [0, 0.5, 0.5, 0.8, 1]
            },
        },
    };

    useEffect(() => {
        animation.start("visible");
    }, [animation]);

    return (
        <section className='container-fluid main'>
            <AnimatePresence initial={false} exitBeforeEnter>
                {navLinkMobile &&
                    <motion.div
                        className='navmobile'
                        onClick={() => setNavLinkMobile(false)}
                        variants={parentMotion}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        >
                        <motion.ul
                            className='navmobile-ul'
                            onClick={(e) => e.stopPropagation()}
                            variants={ulMotion}
                        >
                            {
                                navlinks.map((x: any, y: any) => (
                                    <li
                                        key={y}
                                        className='navmobile-li'
                                        onClick={() => scrollToSection(x.id)}
                                    >
                                        {x.name}
                                    </li>
                                ))
                            }
                        </motion.ul>
                    </motion.div>
                }
            </AnimatePresence>
            <div className='d-flex header'>
                <ul>
                    {
                        navlinks.map((x: any, y: any) => (
                            <li
                                key={y}
                                className='underline-from-center'
                                onClick={() => scrollToSection(x.id)}
                            >
                                {x.name}
                            </li>
                        ))
                    }
                </ul>
                <div className='menu d-flex justify-content-between w-100'>
                    <img src={logo} width={36} height={36} alt='logo' loading='lazy'/>
                    <div className='menu-icon-div'>
                        <AiOutlineMenu className='menu-icon' onClick={() => setNavLinkMobile(true)}/>
                    </div>
                </div>
            </div>
            <motion.div 
                className='main-sub'
                variants={dummyVariants}
                initial='hidden'
                animate={animation}
                >
                <Reveal duration={1200} effect='fade-in'>
                    <div className='lineart'>
                        <ImagePreloader
                            src={lineart_sm}
                            alt='lineart' 
                        />
                    </div>
                </Reveal>
                <div className='d-flex justify-content-center align-items-center contents'>
                    <div className='d-flex content'>
                        <span className='first'>Hi there, I am</span>
                        <div className='name-title'>
                            <motion.div className='style-left' variants={slideMotion(4.5, 'left')}></motion.div>
                            <motion.div className='style-right' variants={slideMotion(4.5, 'right')}></motion.div>
                            <motion.h1 className='second' variants={slideUp(1.2)}>Jeanson Avenilla</motion.h1>
                            <motion.h2 className='third' variants={slideUp(1.8)}>Software Engineer & Developer</motion.h2>
                        </div>
                        <motion.p className='fourth' variants={slideUp(3)}>
                            I am a software engineer and developer from the Philippines with over three years of experience in the industry. I have a serious passion for coding software, system and web applications (full stack) specializing in building realtime system & automation.
                        </motion.p>
                        <motion.button className='button' onClick={() => scrollToSection('about')} variants={slideMotion(3.5, 'left')}>
                            GET IN TOUCH
                            <motion.div className='style-button-line' variants={slideMotion2}></motion.div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Main;