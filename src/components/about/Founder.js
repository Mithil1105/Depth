import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import theme from '../../styles/theme';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import hemaliImg from '../../assets/images/depthhh/achievements/Hemali/hemali.jpg';

const ContentWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(12)};
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const ImageFrame = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: -${theme.spacing(4)};
    left: -${theme.spacing(4)};
    width: 100%;
    height: 100%;
    border: 5px solid ${theme.colors.secondary.main};
    z-index: -1;
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: ${theme.shadows.medium};
`;

const InfoSection = styled.div`
  flex: 1;
`;

const Name = styled(motion.h3)`
  font-size: ${theme.typography.fontSize['3xl']};
  margin-bottom: ${theme.spacing(2)};
`;

const Title = styled(motion.h4)`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.secondary.main};
  margin-bottom: ${theme.spacing(6)};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Biography = styled(motion.p)`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.8;
  margin-bottom: ${theme.spacing(4)};
  color: ${theme.colors.text.secondary};
`;

const Quote = styled(motion.blockquote)`
  padding: ${theme.spacing(6)};
  margin: ${theme.spacing(8)} 0;
  background-color: ${theme.colors.background.dark};
  border-left: 5px solid ${theme.colors.primary.main};
  font-style: italic;
  font-size: ${theme.typography.fontSize.xl};
  line-height: 1.6;
  color: ${theme.colors.primary.main};
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: ${theme.spacing(2)};
    left: ${theme.spacing(2)};
    font-size: ${theme.typography.fontSize['5xl']};
    color: rgba(125, 90, 80, 0.1);
  }
`;

const CredentialsList = styled(motion.ul)`
  margin-top: ${theme.spacing(6)};
  list-style: none;
  margin-left: 0;
`;

const CredentialItem = styled(motion.li)`
  margin-bottom: ${theme.spacing(3)};
  padding-left: ${theme.spacing(5)};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: ${theme.spacing(2)};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary.main};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(6)};
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.fontSize.lg};
  transition: all ${theme.transitions.short};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
    transform: translateY(-3px);
  }
`;

const textVariants = {
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

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Founder = () => {
    // Use the provided local image for Hemali Vakani
    const founderImage = hemaliImg;

    const credentials = [
        "Diploma in Sculpture",
        "15+ years of experience in various sculpting techniques",
        "Featured in multiple national art exhibitions",
        "Completed over 150 commissioned pieces for private collectors",
        "Conducted workshops and masterclasses across India"
    ];

    return (
        <Section id="founder" title="The Founder" bgColor="light">
            <ContentWrapper>
                <ImageSection>
                    <ImageFrame
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ArtistImage src={founderImage} alt="Hemali Vakani - Founder and Artist" />
                    </ImageFrame>
                </ImageSection>

                <InfoSection>
                    <Name
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Hemali Vakani
                    </Name>

                    <Title
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Founder & Principal Artist
                    </Title>

                    <Biography
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Born with an eye for detail and a heart drawn to textures and forms, Hemali Vakani is the creative soul behind Depth & Dimension. Her academic foundation in sculpture and years of hands-on experience guide our artistic philosophy.
                    </Biography>

                    <Biography
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        With every piece, she channels her love for nature, form, and balance. Hemali's work is characterized by its emotional resonance and meticulous attention to detail, whether creating figurative portraits or abstract interpretations.
                    </Biography>

                    <Quote
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        I believe that sculpture has the unique ability to make the invisible visible – to give form to emotions, memories, and ideas that exist beyond words.
                    </Quote>

                    <CredentialsList>
                        {credentials.map((credential, index) => (
                            <CredentialItem
                                key={index}
                                custom={index}
                                variants={listItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {credential}
                            </CredentialItem>
                        ))}
                    </CredentialsList>

                    <SocialLinks
                        variants={socialVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIcon>
                        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIcon>
                        <SocialIcon href="mailto:hemali@depthanddimension.com">
                            <FaEnvelope />
                        </SocialIcon>
                    </SocialLinks>
                </InfoSection>
            </ContentWrapper>
        </Section>
    );
};

export default Founder; 