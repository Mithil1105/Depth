import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedWorks from '../components/home/FeaturedWorks';
import ArtistCTA from '../components/home/ArtistCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Depth & Dimension | Handcrafted Sculptures</title>
                <meta name="description" content="Depth & Dimension is a sculpture studio crafting timeless art pieces that tell stories and evoke emotions. Explore our collection or commission a custom piece." />
            </Helmet>

            <HeroSection />
            <IntroSection />
            <FeaturedWorks />
            <ArtistCTA />
            <TestimonialsSection />
        </>
    );
};

export default HomePage; 