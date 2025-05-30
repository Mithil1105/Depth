import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Section from '../common/Section';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Import gallery images and descriptions (copy logic from GalleryPage.js)
const importAll = (r) => {
  return r.keys().map(filename => ({
    src: r(filename),
    name: filename.replace('./', ''),
  }));
};

const imageDescriptions = {
  'Picture1.png': {
    title: 'Lion Sculpture made from Metal',
    height: '13 ft. height',
    material: 'Metal',
  },
  'Picture2.png': {
    title: 'Deer Sculpture made from Metal',
    height: 'Life size',
    material: 'Metal',
  },
  'Picture3.png': {
    title: 'Lion Sculpture made from Metal',
    height: 'Life size',
    material: 'Metal',
  },
  // ... (add more as needed, or import from a shared file)
};

const galleryImages = importAll(require.context('../../assets/images/gallary', false, /\.(png|jpe?g|svg)$/));

const FeaturedWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 500px;
`;

const Carousel = styled.div`
  width: 100%;
  max-width: 1100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  color: ${theme.colors.primary.main};
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.secondary.main};
    color: #fff;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: -60px;
`;
const RightArrow = styled(ArrowButton)`
  right: -60px;
`;

const SlidesRow = styled(motion.div)`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const Slide = styled(motion.div)`
  width: 320px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 0;
  @media (max-width: 1100px) {
    width: 280px;
    padding: 1.2rem;
  }
  @media (max-width: 900px) {
    width: 220px;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 95vw;
    padding: 1rem;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  background: #f8f5f2;
`;

const SlideTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary.main};
  text-align: center;
`;
const SlideDetails = styled.div`
  color: ${theme.colors.text.primary};
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const SlideMaterial = styled.div`
  color: ${theme.colors.secondary.dark};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const SlideHeight = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
`;

const FeaturedWorks = () => {
  const [index, setIndex] = useState(0);
  const slides = galleryImages.filter(img => imageDescriptions[img.name]);
  const numToShow = 3;
  const autoRotateRef = useRef();

  // Responsive: show 1 on mobile
  const [numVisible, setNumVisible] = useState(numToShow);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) setNumVisible(1);
      else setNumVisible(numToShow);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation with reset on manual navigation
  const resetAutoRotate = React.useCallback(() => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(() => {
      setIndex(prev => (prev + numVisible) % slides.length);
    }, 4000);
  }, [numVisible, slides.length]);

  useEffect(() => {
    if (slides.length <= numVisible) return; // Don't rotate if not enough slides
    resetAutoRotate();
    return () => clearInterval(autoRotateRef.current);
  }, [numVisible, slides.length, resetAutoRotate]);

  const goLeft = () => {
    setIndex(prev => (prev - numVisible + slides.length) % slides.length);
    resetAutoRotate();
  };
  const goRight = () => {
    setIndex(prev => (prev + numVisible) % slides.length);
    resetAutoRotate();
  };

  // Get the current set of slides
  const getSlides = () => {
    if (slides.length === 0) return [];
    const arr = [];
    for (let i = 0; i < Math.min(numVisible, slides.length); i++) {
      const idx = (index + i) % slides.length;
      arr.push(slides[idx]);
    }
    return arr;
  };
  const currentSlides = getSlides();

  const arrowsDisabled = slides.length <= numVisible;

  return (
    <Section
      id="featured-works"
      title="Our Iconic Sculptures"
      subtitle="Discover our most celebrated pieces that embody our artistic philosophy"
      bgColor="light"
      align="center"
    >
      <FeaturedWorksContainer>
        <Carousel>
          <AnimatePresence initial={false} mode="wait">
            <SlidesRow
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              {currentSlides.map((current, idx) => {
                const desc = current ? imageDescriptions[current.name] : null;
                return (
                  <Slide key={current.name}>
                    <SlideImage src={current.src} alt={desc?.title} />
                    <SlideTitle>{desc?.title}</SlideTitle>
                    <SlideDetails>
                      <SlideMaterial><b>Material:</b> {desc?.material}</SlideMaterial>
                      <SlideHeight><b>Height:</b> {desc?.height}</SlideHeight>
                    </SlideDetails>
                    <Button to="/gallery" variant="primary" size="medium" elevation={true}>
                      View Details
                    </Button>
                  </Slide>
                );
              })}
            </SlidesRow>
          </AnimatePresence>
        </Carousel>
      </FeaturedWorksContainer>
    </Section>
  );
};

export default FeaturedWorks; 