import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import theme from '../../styles/theme';

const ContentWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(15)};
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.large};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -${theme.spacing(6)};
    left: -${theme.spacing(6)};
    width: 100px;
    height: 100px;
    border-top: 4px solid ${theme.colors.secondary.main};
    border-left: 4px solid ${theme.colors.secondary.main};
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing(6)};
    right: -${theme.spacing(6)};
    width: 100px;
    height: 100px;
    border-bottom: 4px solid ${theme.colors.secondary.main};
    border-right: 4px solid ${theme.colors.secondary.main};
    z-index: -1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${theme.transitions.medium};
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  
  @media (max-width: 992px) {
    order: -1;
  }
`;

const Heading = styled(motion.h2)`
  position: relative;
  margin-bottom: ${theme.spacing(6)};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing(3)};
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary.main};
  }
`;

const Description = styled(motion.p)`
  margin-bottom: ${theme.spacing(6)};
  line-height: 1.8;
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
`;

const HighlightPoint = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};
  
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.secondary.main};
    margin-right: ${theme.spacing(3)};
    border-radius: 50%;
  }
  
  span {
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.primary};
  }
`;

const AnimatedText = styled(motion.p)`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  font-style: italic;
  margin: ${theme.spacing(8)} 0;
  line-height: 1.6;
  position: relative;
  
  &:before, &:after {
    content: '"';
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.secondary.main};
  }
`;

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const IntroSection = () => {
    // Using a placeholder image
    const sculptorImage = 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

    return (
        <Section id="what-we-do" title="What We Do" padding="large">
            <ContentWrapper>
                <ImageWrapper
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={sculptorImage} alt="Sculptor at work" />
                </ImageWrapper>

                <TextContent>
                    <Heading
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Transforming Clay, Stone, and Imagination
                    </Heading>

                    <Description
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        At Depth & Dimension, we create handcrafted sculptures that capture emotion, movement, and life.
                        Each piece tells a story, inviting viewers to connect and reflect.
                    </Description>

                    <HighlightPoint
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <span>Traditional craftsmanship with contemporary vision</span>
                    </HighlightPoint>

                    <HighlightPoint
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <span>Custom commissions for homes, gardens, and public spaces</span>
                    </HighlightPoint>

                    <HighlightPoint
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <span>Eco-conscious materials and sustainable practices</span>
                    </HighlightPoint>

                    <AnimatedText
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        We don't just create sculptures; we breathe life into art.
                    </AnimatedText>
                </TextContent>
            </ContentWrapper>
        </Section>
    );
};

export default IntroSection; 