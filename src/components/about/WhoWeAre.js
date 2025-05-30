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

  @media (max-width: 576px) {
    gap: ${theme.spacing(4)};
    padding: 0 ${theme.spacing(2)};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 992px) {
    margin-top: ${theme.spacing(8)};
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  max-width: 420px;

  @media (max-width: 576px) {
    max-width: 95vw;
  }
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.small};
  box-shadow: ${theme.shadows.medium};
  z-index: 2;
  transition: all 0.3s;
  
  &.top-left {
    top: -${theme.spacing(8)};
    left: -${theme.spacing(8)};
  }
  
  &.bottom-right {
    bottom: -${theme.spacing(8)};
    right: -${theme.spacing(8)};
  }
  
  @media (max-width: 992px) {
    position: static;
    width: 140px;
    height: 100px;
    margin-bottom: ${theme.spacing(3)};
    &.top-left {
      top: unset;
      left: unset;
      margin-bottom: ${theme.spacing(3)};
    }
    &.bottom-right {
      bottom: unset;
      right: unset;
      margin-top: ${theme.spacing(3)};
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

const mainImage = "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"; // Team working
const floatingImage = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"; // Collaboration

const WhoWeAre = () => {
  return (
    <Section id="who-we-are" title="Who We Are">
      <ContentWrapper>
        <TextContent>
          <ul style={{ color: theme.colors.text.primary, fontSize: theme.typography.fontSize.lg, lineHeight: 1.8, marginBottom: theme.spacing(6), paddingLeft: '1.5em' }}>
            <li>Depth & Dimension is an organization which works with innovative ideas for development of sculptures, outdoor space for Forest department and other government, semi-government and private sectors.</li>
            <li>We work in a wide range of style, producing two- or three-dimensional, life size and larger than life size sculptures, mural animals and birds with actual details level with our full-time in-house staff.</li>
            <li>Our in-house production unit has a tightly knit team & skilled to producing the highest quality, most creative, unforgettable development for our clients.</li>
            <li>Our owner Hemali Vakani completed her Diploma in Sculpture from Shet C.N. college in 2002.</li>
            <li>She has received the panchum-purusharth award for standing 1st in state examination of diploma in Sculpture.</li>
            <li>Since 2002 she has participated in many Sculpture exhibitions and started her Career as a professional freelancer artist and created exterior and interior Sculptures in various mediums like Clay, Stone Carving, Wood Carving, Metal casting, Terracotta and Mix media.</li>
            <li>In 2018, she formed a company with GST number named Depth & Dimension.</li>
            <li>We have worked with forest department for many van mahotsavs.</li>
            <li>In rakshak van at Bhuj, we created monumental Sculpture, Shaurya Sculpture in bronze, entrance gate and many other Sculptures.</li>
            <li>In Jadeshwar van, Ahmedabad we created entrance gate and Sculptures of birds.</li>
            <li>In Shyamal van at Shyamlaji, we created selfie points, religious murals, wildlife and tribal Sculpture dioramas.</li>
          </ul>
        </TextContent>

        <ImageWrapper
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FloatingImage
            src={floatingImage}
            alt="Team collaboration"
            className="top-left"
            variants={floatingImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <MainImage src={mainImage} alt="Our Team at Work" />
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default WhoWeAre; 