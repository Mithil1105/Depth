import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import Founder from '../components/about/Founder';
import { Link } from 'react-router-dom';
import achievementsImg from '../assets/images/depthhh/achievements/Hemali/Picture56.png';

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
            {/* Achievements Subsection */}
            <section style={{ margin: '3rem auto', maxWidth: 800, textAlign: 'center' }}>
                <h2 style={{ color: '#8B1A1A', fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1.5rem' }}>Achievements</h2>
                <img src={achievementsImg} alt="Hemali Vakani receiving award" style={{ maxWidth: '320px', width: '100%', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 4px 24px rgba(60, 40, 20, 0.10)' }} />
                <div style={{ color: '#8B1A1A', fontSize: '1.35rem', fontWeight: 600, marginTop: '1rem', letterSpacing: '1px' }}>
                    GOT AWARD FOR YOUNGEST ENTREPRENEUR FROM OUR PREVIOUS CHIEF MINISTER MR. VIJAY RUPANI 2017
                </div>
            </section>
            {/* <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link to="/team" style={{ fontSize: '1.2rem', color: '#4B5320', textDecoration: 'underline' }}>
                    Meet Our Team
                </Link>
            </div> */}
        </>
    );
};

export default AboutPage; 