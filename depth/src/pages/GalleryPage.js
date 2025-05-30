import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

// Dynamically import images
const importAll = (r) => {
  return r.keys().map(r);
};

const galleryImages = importAll(require.context('../assets/images/gallary', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    'sculptures',
    'installations',
    'commissions'
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.includes(filter));

  return (
    <GalleryContainer>
      <PageTitle>Our Gallery</PageTitle>

      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            onClick={() => setFilter(category)}
            active={filter === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>

      <ImageGrid>
        {filteredImages.map((img, index) => (
          <ImageWrapper
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-family: ${theme.fonts.header};
  color: ${theme.colors.darkBrown};
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active
    ? theme.colors.terracotta
    : theme.colors.lightBeige};
  color: ${props => props.active
    ? theme.colors.lightBeige
    : theme.colors.darkBrown};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.terracotta};
    color: ${theme.colors.lightBeige};
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default GalleryPage; 