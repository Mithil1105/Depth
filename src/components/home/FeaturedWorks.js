import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Placeholder images for now
const featuredWorks = [
    {
        id: 1,
        title: 'Graceful Ascent',
        category: 'Bronze',
        description: 'A figurative sculpture capturing the delicate balance between strength and vulnerability.',
        image: 'https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 2,
        title: 'Eternal Bond',
        category: 'Stone',
        description: 'A minimalist interpretation of connection and relationship across time and space.',
        image: 'https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 3,
        title: 'Whispers of Nature',
        category: 'Terracotta',
        description: 'An organic form that draws inspiration from flowing water and windswept landscapes.',
        image: 'https://images.unsplash.com/photo-1558999539-7a9241f80305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
];

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(10)};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const WorkItem = styled(motion.div)`
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: transform ${theme.transitions.medium};
  background-color: ${theme.colors.background.paper};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.large};
    
    .work-image img {
      transform: scale(1.05);
    }
  }
`;

const WorkImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    z-index: 1;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.medium};
`;

const WorkCategory = styled.span`
  position: absolute;
  top: ${theme.spacing(4)};
  right: ${theme.spacing(4)};
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  z-index: 2;
`;

const WorkContent = styled.div`
  padding: ${theme.spacing(6)};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const WorkTitle = styled.h3`
  margin-bottom: ${theme.spacing(2)};
  font-size: ${theme.typography.fontSize['2xl']};
`;

const WorkDescription = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing(6)};
  flex-grow: 1;
`;

const ViewLink = styled(Link)`
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  
  &:after {
    content: '→';
    margin-left: ${theme.spacing(2)};
    transition: transform ${theme.transitions.short};
  }
  
  &:hover {
    color: ${theme.colors.primary.dark};
    
    &:after {
      transform: translateX(5px);
    }
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(10)};
`;

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const FeaturedWorks = () => {
    return (
        <Section
            id="featured-works"
            title="Our Iconic Sculptures"
            subtitle="Discover our most celebrated pieces that embody our artistic philosophy"
            bgColor="light"
            align="center"
        >
            <WorksGrid>
                {featuredWorks.map((work, index) => (
                    <WorkItem
                        key={work.id}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <WorkImageContainer className="work-image">
                            <WorkImage src={work.image} alt={work.title} />
                            <WorkCategory>{work.category}</WorkCategory>
                        </WorkImageContainer>
                        <WorkContent>
                            <WorkTitle>{work.title}</WorkTitle>
                            <WorkDescription>{work.description}</WorkDescription>
                            <ViewLink to={`/gallery/${work.id}`}>View Details</ViewLink>
                        </WorkContent>
                    </WorkItem>
                ))}
            </WorksGrid>

            <ButtonContainer>
                <Button
                    to="/gallery"
                    variant="primary"
                    size="medium"
                    elevation={true}
                >
                    Explore Full Collection
                </Button>
            </ButtonContainer>
        </Section>
    );
};

export default FeaturedWorks; 