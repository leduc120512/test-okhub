import React from 'react';
import Banner from './components/Banner';
import About from './components/about';
import Vision from "./components/vision";
import Life from "./components/life";
const LandingPage = () => {
    return (
        <>
            <Banner />
<About/>
            <Vision />
            <Life />
            <main>
                {/*<Hero />*/}
                {/*<About />*/}
                {/*<Features />*/}
                {/*<CTA />*/}
                {/*<Contact />*/}
            </main>

            {/*<Footer />*/}
        </>
    );
};

export default LandingPage;