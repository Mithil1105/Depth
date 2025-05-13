import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: ${props =>
        props.padding === 'large' ? `${theme.spacing(30)} 0` :
            props.padding === 'small' ? `${theme.spacing(10)} 0` :
                `${theme.spacing(20)} 0`
    };
  background-color: ${props =>
        props.bgColor === 'primary' ? theme.colors.primary.main :
            props.bgColor === 'secondary' ? theme.colors.secondary.light :
                props.bgColor === 'dark' ? theme.colors.primary.dark :
                    props.bgColor === 'light' ? theme.colors.background.dark :
                        theme.colors.background.main
    };
  color: ${props =>
        props.bgColor === 'primary' || props.bgColor === 'dark' ? theme.colors.text.light :
            theme.colors.text.primary
    };
  position: relative;
  overflow: ${props => props.overflow || 'hidden'};
`;

const SectionInner = styled.div`
  width: 100%;
  max-width: ${props => props.fullWidth ? '100%' : '1200px'};
  margin: 0 auto;
  padding: ${props => props.fullWidth ? '0' : `0 ${theme.spacing(5)}`};
  z-index: 2;
  position: relative;
`;

const TitleContainer = styled.div`
  margin-bottom: ${props => props.subtitle ? theme.spacing(2) : theme.spacing(10)};
  text-align: ${props => props.align || 'left'};
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing(3)};
    left: ${props => props.align === 'center' ? '50%' : '0'};
    transform: ${props => props.align === 'center' ? 'translateX(-50%)' : 'none'};
    width: 60px;
    height: 3px;
    background-color: ${props => props.light ? theme.colors.secondary.main : theme.colors.primary.main};
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${props => props.light ? theme.colors.text.light : theme.colors.text.secondary};
  margin-top: ${theme.spacing(6)};
  max-width: 800px;
  margin-left: ${props => props.align === 'center' ? 'auto' : '0'};
  margin-right: ${props => props.align === 'center' ? 'auto' : '0'};
`;

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Section = ({
    children,
    title,
    subtitle,
    padding = 'medium',
    bgColor = 'default',
    align = 'left',
    fullWidth = false,
    overflow,
    id,
    className
}) => {
    const isLight = bgColor === 'primary' || bgColor === 'dark';

    return (
        <SectionContainer
            id={id}
            className={className}
            padding={padding}
            bgColor={bgColor}
            overflow={overflow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
        >
            <SectionInner fullWidth={fullWidth}>
                {title && (
                    <TitleContainer align={align} subtitle={subtitle}>
                        <Title align={align} light={isLight} className="section-title">
                            {title}
                        </Title>
                        {subtitle && (
                            <Subtitle align={align} light={isLight}>
                                {subtitle}
                            </Subtitle>
                        )}
                    </TitleContainer>
                )}
                {children}
            </SectionInner>
        </SectionContainer>
    );
};

export default Section; 