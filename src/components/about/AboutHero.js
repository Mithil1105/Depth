import React from 'react';
import styled from '@emotion/styled';
import PageBanner from '../common/PageBanner';
import theme from '../../styles/theme';

// This will be replaced with an actual image
const bannerImage = 'https://images.unsplash.com/photo-1567964217888-7ad57c3ae020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const AboutHero = () => {
    return (
        <PageBanner
            title="Our Story, Our Passion, Our Purpose"
            subtitle="Learn about the artist and philosophy behind Depth & Dimension"
            bgImage={bannerImage}
            size="large"
        />
    );
};

export default AboutHero; 