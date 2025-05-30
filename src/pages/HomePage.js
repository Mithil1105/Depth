import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedWorks from '../components/home/FeaturedWorks';
import ArtistCTA from '../components/home/ArtistCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handler to view project from homepage
    const handleViewProject = (projectId) => {
        // Store the project id in localStorage
        localStorage.setItem('openProjectId', projectId);
        navigate('/projects');
    };

    return (
        <>
            <Helmet>
                <title>Depth & Dimension | Handcrafted Sculptures</title>
                <meta name="description" content="Depth & Dimension is a sculpture studio crafting timeless art pieces that tell stories and evoke emotions. Explore our collection or commission a custom piece." />
            </Helmet>

            <HeroSection />
            <IntroSection />
            <FeaturedWorks onViewProject={handleViewProject} />
            <ArtistCTA />
            <TestimonialsSection />
        </>
    );
};

export default HomePage; 