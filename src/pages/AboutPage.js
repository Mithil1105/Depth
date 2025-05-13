import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import Founder from '../components/about/Founder';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>About Us | Depth & Dimension</title>
                <meta name="description" content="Learn about Depth & Dimension, our story, and our commitment to creating timeless sculptures that tell stories and evoke emotions." />
            </Helmet>

            <AboutHero />
            <WhoWeAre />
            <Founder />
        </>
    );
};

export default AboutPage; 