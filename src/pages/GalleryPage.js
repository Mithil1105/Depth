import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../components/common/PageBanner';
import Section from '../components/common/Section';

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Gallery | Depth & Dimension</title>
                <meta name="description" content="Explore our collection of handcrafted sculptures at Depth & Dimension. Each piece tells a unique story through form and texture." />
            </Helmet>

            <PageBanner
                title="Our Gallery"
                subtitle="Explore our collection of handcrafted sculptures"
                bgImage="https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            />

            <Section
                title="Coming Soon"
                subtitle="Our gallery is currently being curated. Please check back soon to explore our collection."
                align="center"
            >
                {/* Gallery content will be added here */}
            </Section>
        </>
    );
};

export default GalleryPage; 