import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';

const BannerContainer = styled.div`
  position: relative;
  height: ${props => props.size === 'large' ? '600px' : props.size === 'small' ? '300px' : '450px'};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text.light};
  text-align: center;
  padding: ${theme.spacing(5)};
  margin-top: ${props => props.marginTop || '0'};
  
  @media (max-width: 768px) {
    height: ${props => props.size === 'large' ? '500px' : props.size === 'small' ? '250px' : '350px'};
  }
`;

const Content = styled(motion.div)`
  max-width: 800px;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  margin-bottom: ${theme.spacing(4)};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-size: ${props => props.size === 'large' ? theme.typography.fontSize['6xl'] : theme.typography.fontSize['5xl']};
  
  @media (max-width: 768px) {
    font-size: ${props => props.size === 'large' ? theme.typography.fontSize['5xl'] : theme.typography.fontSize['4xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing(6)};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing(4)};
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
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

const PageBanner = ({
    title,
    subtitle,
    bgImage,
    children,
    size = 'medium',
    marginTop
}) => {
    return (
        <BannerContainer bgImage={bgImage} size={size} marginTop={marginTop}>
            <Content
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {title && <Title variants={itemVariants} size={size}>{title}</Title>}
                {subtitle && <Subtitle variants={itemVariants}>{subtitle}</Subtitle>}
                {children && (
                    <ButtonsContainer variants={itemVariants}>
                        {children}
                    </ButtonsContainer>
                )}
            </Content>
        </BannerContainer>
    );
};

export default PageBanner; 