import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import Button from '../common/Button';
import theme from '../../styles/theme';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    title: 'Art Collector',
    quote: 'The sculpture I commissioned from Depth & Dimension has become the centerpiece of my home. Hemali has a remarkable ability to understand a client\'s vision and bring it to life with soul and precision.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Priya Patel',
    title: 'Interior Designer',
    quote: 'I\'ve collaborated with Depth & Dimension on multiple projects, and every time, the sculptures have elevated the space beyond what I imagined. Their work brings a sense of timeless elegance that my clients absolutely love.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    title: 'Gallery Owner',
    quote: 'Hosting Hemali\'s work in our gallery has been a privilege. The attention to detail and the emotional resonance of each piece draws visitors in, creating moments of genuine connection with the art.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  }
];

const TestimonialContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  min-height: 400px;
  
  @media (max-width: 768px) {
    min-height: 500px;
  }
`;

const TestimonialSlide = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: ${theme.spacing(5)};
  border-radius: ${theme.borderRadius.medium};
  background-color: ${theme.colors.background.paper};
  box-shadow: ${theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QuoteIcon = styled.div`
  color: ${theme.colors.secondary.main};
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing(4)};
`;

const Quote = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.8;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing(8)};
  font-style: italic;
  max-width: 700px;
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${theme.colors.secondary.main};
  margin-bottom: ${theme.spacing(3)};
`;

const ClientName = styled.h4`
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing(1)};
`;

const ClientTitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.md};
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing(15)};
  gap: ${theme.spacing(4)};
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.primary.main};
  color: ${theme.colors.primary.main};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  
  &:hover {
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.text.light};
  }
  
  &:disabled {
    background-color: transparent;
    border-color: ${theme.colors.text.secondary};
    color: ${theme.colors.text.secondary};
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(10)};
`;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  })
};

const TestimonialsSection = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex(prev => [(prev[0] + 1) % testimonials.length, 1]);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => [(prev[0] - 1 + testimonials.length) % testimonials.length, -1]);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <Section
      id="testimonials"
      title="What Our Collectors Say"
      bgColor="default"
      align="center"
    >
      <TestimonialContainer
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <TestimonialSlide
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <Quote>{testimonials[currentIndex].quote}</Quote>
            <ClientInfo>
              <ClientImage
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
              />
              <ClientName>{testimonials[currentIndex].name}</ClientName>
              <ClientTitle>{testimonials[currentIndex].title}</ClientTitle>
            </ClientInfo>
          </TestimonialSlide>
        </AnimatePresence>
      </TestimonialContainer>

      <Controls>
        <ControlButton onClick={prevTestimonial}>
          <FaChevronLeft />
        </ControlButton>
        <ControlButton onClick={nextTestimonial}>
          <FaChevronRight />
        </ControlButton>
      </Controls>

      <ButtonContainer>
        <Button
          to="/testimonials"
          variant="outline-primary"
          size="medium"
        >
          Read More Testimonials
        </Button>
      </ButtonContainer>
    </Section>
  );
};

export default TestimonialsSection;