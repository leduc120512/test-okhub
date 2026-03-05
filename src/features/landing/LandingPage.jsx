import React from 'react';
import Banner from './components/Banner';
import About from './components/about';
import Vision from "./components/vision";
import Life from "./components/life";
import Detail from "./components/Detail";
import Imprint from "./components/imprint";
import Cooperate from "./components/cooperate";
import New_hot from "./components/new_hot";
import Footer from "../../components/layout/footer";
const LandingPage = () => {
    return (
        <>
            <Banner />
             <About/>
            <Vision />
            <Life />
            <Detail />
            <Imprint/>
            <Cooperate />
            <New_hot />
            <main>
                {/*<Hero />*/}
                {/*<About />*/}
                {/*<Features />*/}
                {/*<CTA />*/}
                {/*<Contact />*/}
            </main>

            <Footer />
        </>
    );
};

export default LandingPage;