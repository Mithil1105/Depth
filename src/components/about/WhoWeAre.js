import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import theme from '../../styles/theme';

const ContentWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(12)};
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled(motion.p)`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.8;
  margin-bottom: ${theme.spacing(6)};
  color: ${theme.colors.text.secondary};
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  position: relative;
  
  @media (max-width: 992px) {
    margin-top: ${theme.spacing(8)};
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.small};
  box-shadow: ${theme.shadows.medium};
  z-index: 2;
  
  &.top-left {
    top: -${theme.spacing(8)};
    left: -${theme.spacing(8)};
  }
  
  &.bottom-right {
    bottom: -${theme.spacing(8)};
    right: -${theme.spacing(8)};
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
    
    &.top-left {
      top: -${theme.spacing(5)};
      left: -${theme.spacing(5)};
    }
    
    &.bottom-right {
      bottom: -${theme.spacing(5)};
      right: -${theme.spacing(5)};
    }
  }
`;

const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
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

const floatingImageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
        }
    }
};

const floatingImageVariants2 = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut"
        }
    }
};

const WhoWeAre = () => {
    // Placeholder images (to be replaced with actual studio and work images)
    const studioImage = 'https://images.unsplash.com/photo-1505937059382-ff6935f8aad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
    const detail1 = 'https://images.unsplash.com/photo-1535711968967-c39fd757a5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';
    const detail2 = 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';

    return (
        <Section id="who-we-are" title="Who We Are">
            <ContentWrapper>
                <TextContent>
                    <Paragraph
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        At Depth & Dimension, we transform clay, stone, and imagination into timeless masterpieces. Founded by artist Hemali Vakani, who holds a Diploma in Sculpture, our atelier is dedicated to preserving the soul of sculpture through handmade, intricate, and expressive forms.
                    </Paragraph>
                    <Paragraph
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        We believe that in a world increasingly dominated by digital art and mass production, there is profound value in the handcrafted. Each piece that leaves our studio carries with it countless hours of meticulous attention, artistic experimentation, and a commitment to excellence.
                    </Paragraph>
                    <Paragraph
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Our work spans from intimate figurative sculptures that capture the subtleties of human emotion to bold abstract pieces that challenge perception. Whether working in bronze, stone, clay, or mixed media, we approach each material with respect for its inherent properties and possibilities.
                    </Paragraph>
                </TextContent>

                <ImageWrapper
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <MainImage src={studioImage} alt="Depth & Dimension Sculpture Studio" />
                    <FloatingImage
                        src={detail1}
                        alt="Sculpting process detail"
                        className="top-left"
                        variants={floatingImageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                    <FloatingImage
                        src={detail2}
                        alt="Sculpture detail"
                        className="bottom-right"
                        variants={floatingImageVariants2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                </ImageWrapper>
            </ContentWrapper>
        </Section>
    );
};

export default WhoWeAre; 