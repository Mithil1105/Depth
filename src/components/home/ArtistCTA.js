import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Placeholder image for now
const artistImage = 'https://images.unsplash.com/photo-1541439695141-1a586b3fc4e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80';

const CTAContainer = styled.section`
  position: relative;
  padding: ${theme.spacing(20)} 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${artistImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
  }
`;

const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(5)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing(10)};
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const CTAText = styled(motion.div)`
  color: #fff;
  background: rgba(34,34,34,0.7);
  padding: 2rem 2vw;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  @media (max-width: 992px) {
    order: 2;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing(5)};
  position: relative;
  display: inline-block;
  color: #fff;
  text-shadow: 0 2px 16px rgba(0,0,0,0.7);
  background: none;
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing(3)};
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.secondary.main};
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing(8)};
  line-height: 1.7;
  max-width: 500px;
  color: #fff;
  background: none;
  text-shadow: 0 2px 16px rgba(0,0,0,0.7);
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAImageWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    margin-bottom: ${theme.spacing(10)};
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.large};
  
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const ArtistDecoration = styled.div`
  position: absolute;
  top: -${theme.spacing(5)};
  right: -${theme.spacing(5)};
  width: 150px;
  height: 150px;
  border: 3px solid ${theme.colors.secondary.main};
  border-radius: ${theme.borderRadius.small};
  z-index: -1;
  
  @media (max-width: 992px) {
    right: calc(50% - 200px - ${theme.spacing(5)});
  }
`;

const textVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ArtistCTA = () => {
  return (
    <CTAContainer>
      <CTAContent>
        <CTAText>
          <CTATitle
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Meet the Artist
          </CTATitle>
          <CTADescription
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Get to know Hemali Vakani, the creative force behind our sculptures. With a background in traditional sculpture techniques and a passion for innovation, Hemali brings unique vision and skill to every piece.
          </CTADescription>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              to="/about"
              variant="secondary"
              size="large"
              elevation={true}
            >
              Learn More About Hemali
            </Button>
          </motion.div>
        </CTAText>

        <CTAImageWrapper
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ArtistImage src={artistImage} alt="Hemali Vakani, Sculptor" />
          <ArtistDecoration />
        </CTAImageWrapper>
      </CTAContent>
    </CTAContainer>
  );
};

export default ArtistCTA; 