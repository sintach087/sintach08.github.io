import React, { useEffect, useState } from 'react';
import { Main, About, Skills, Tools, Projects, Contact, Footer } from './Components';
import 'common/effects.scss';

const Home = () => {

    const [isLoad, setIsLoad] = useState<boolean>(false);

    useEffect(() => {
        // Wait for the font to load before displaying the content
        const timeout = setTimeout(() => {
            setIsLoad(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
           {
               isLoad ?
               <>
                    <Main />
                    <About />
                    <Skills />
                    <Tools />
                    <Projects />
                    <Contact />
                    <Footer />
               </>
               : null
           }
        </>
    )
}

export default Home;