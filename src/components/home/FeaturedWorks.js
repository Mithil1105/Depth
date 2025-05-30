import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Section from '../common/Section';
import Button from '../common/Button';
import theme from '../../styles/theme';
import nalsarovar1 from '../../assets/images/depthhh/Archive/nalsarovar/Picture117.png';
import shakti1 from '../../assets/images/depthhh/Archive/51shakti/Picture115.png';

// Import gallery images and descriptions (copy logic from GalleryPage.js)
const importAll = (r) => {
  return r.keys().map(filename => ({
    src: r(filename),
    name: filename.replace('./', ''),
  }));
};

const imageDescriptions = {
  'Picture1.png': {
    title: 'Lion Sculpture made from Metal',
    height: '13 ft. height',
    material: 'Metal',
  },
  'Picture2.png': {
    title: 'Deer Sculpture made from Metal',
    height: 'Life size',
    material: 'Metal',
  },
  'Picture3.png': {
    title: 'Lion Sculpture made from Metal',
    height: 'Life size',
    material: 'Metal',
  },
  // ... (add more as needed, or import from a shared file)
};

const galleryImages = importAll(require.context('../../assets/images/gallary', false, /\.(png|jpe?g|svg)$/));

const iconicProjects = [
  {
    title: 'Nalsarovar Wetland Reserve',
    image: nalsarovar1,
    location: 'Nalsarovar Bird Sanctuary',
    description: 'Monumental sculptures and installations in Gujarat\'s premier wetland reserve.',
    highlights: [
      'Monumental main entrance gate (24m x 9m x 3.5m)',
      'Metal flamingo sculptures (9 ft height)',
      'Life-size FRP flamingo island installation',
      'Informative signage and fountains (4m diameter)',
      'Pelican marble sculptures'
    ],
    id: 'nalsarovar'
  },
  {
    title: '51 Shaktipeeth Parikrama Path',
    image: shakti1,
    location: 'Gabbar Hill, Ambaji',
    description: 'Sacred pathway with monumental murals and selfie points celebrating Shakti temples.',
    highlights: [
      'CNC-cut "Maa Ambe" metal sculpture',
      'Murals of Ashapura Mata, Bahuchraji, Chamunda Devi',
      'Rukmini Devi, Khodiyar, and Umiya Mata murals',
      'FRP and metal murals (12 ft x 8 ft or larger)',
      'Immersive selfie points and photo opportunities'
    ],
    id: 'shaktipeeth'
  }
];

const FeaturedWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 500px;
`;

const Carousel = styled.div`
  width: 100%;
  max-width: 1100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  color: ${theme.colors.primary.main};
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.secondary.main};
    color: #fff;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: -60px;
`;
const RightArrow = styled(ArrowButton)`
  right: -60px;
`;

const SlidesRow = styled(motion.div)`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const Slide = styled(motion.div)`
  width: 320px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 0;
  @media (max-width: 1100px) {
    width: 280px;
    padding: 1.2rem;
  }
  @media (max-width: 900px) {
    width: 220px;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 95vw;
    padding: 1rem;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  background: #f8f5f2;
`;

const SlideTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary.main};
  text-align: center;
`;
const SlideDetails = styled.div`
  color: ${theme.colors.text.primary};
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const SlideMaterial = styled.div`
  color: ${theme.colors.secondary.dark};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const SlideHeight = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  align-items: center;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 340px;
  max-width: 95vw;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  background: #f8f5f2;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary.main};
  text-align: center;
`;
const ProjectLocation = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const ProjectDescription = styled.div`
  color: ${theme.colors.text.primary};
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const ProjectHighlights = styled.ul`
  color: ${theme.colors.secondary.dark};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1.2em;
  text-align: left;
`;

const FeaturedWorks = ({ onViewProject }) => (
  <Section id="iconic-projects" title="Iconic Projects" align="center">
    <ProjectsGrid>
      {iconicProjects.map((project, idx) => (
        <ProjectCard key={idx}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectLocation>{project.location}</ProjectLocation>
          <ProjectDescription>{project.description}</ProjectDescription>
          <Button
            variant="primary"
            size="medium"
            elevation={true}
            onClick={() => onViewProject && onViewProject(project.id)}
          >
            View Project
          </Button>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </Section>
);

export default FeaturedWorks; 