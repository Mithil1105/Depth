import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import theme from '../../styles/theme';
import heroImage from '../../assets/images/depthhh/about us/Picture54.png';

// Import a placeholder image for now - this should be replaced with actual sculpture images
const heroImageUrl = heroImage;

const HeroContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${heroImageUrl});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 ${theme.spacing(5)};
  z-index: 2;
`;

const Tagline = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  line-height: 1.2;
  color: #2d3a26;
  text-shadow: 0 4px 24px rgba(0,0,0,0.18), 0 1px 0 #333;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing(4)};
  justify-content: center;
  margin-top: ${theme.spacing(8)};
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing(8)};
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.text.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  span {
    font-size: ${theme.typography.fontSize.sm};
    letter-spacing: 1px;
    margin-bottom: ${theme.spacing(2)};
  }
  
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border-right: 2px solid ${theme.colors.text.light};
    border-bottom: 2px solid ${theme.colors.text.light};
    transform: rotate(45deg);
  }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
            duration: 0.6,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const scrollVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, 10, 0],
        transition: {
            repeat: Infinity,
            duration: 1.5
        }
    }
};

const HeroSection = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <HeroContainer>
            <HeroContent
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Tagline variants={itemVariants}>
                    We Sculpt Legacies — From Stone to Story.
                </Tagline>

                <ButtonGroup variants={itemVariants}>
                    <Button
                        to="/projects"
                        variant="primary"
                        size="large"
                        elevation={true}
                    >
                        Explore Our Collection
                    </Button>
                    <Button
                        to="/about"
                        variant="outline-secondary"
                        size="large"
                        elevation={true}
                    >
                        Meet the Artist
                    </Button>
                </ButtonGroup>
            </HeroContent>

            <ScrollDown
                onClick={scrollToContent}
                variants={scrollVariants}
                initial="initial"
                animate="animate"
            >
                <span>SCROLL DOWN</span>
            </ScrollDown>
        </HeroContainer>
    );
};

export default HeroSection; 