import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import Section from '../common/Section';
import theme from '../../styles/theme';

// Sample Instagram posts (in a real application, these would come from the Instagram API)
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1631125915902-d9afa0439ff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 124,
    comments: 12,
    caption: 'Behind the scenes: Working on a new bronze piece #SculptureInProgress'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546935912-5d6f2504d0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 246,
    comments: 24,
    caption: 'Inspiration comes from everywhere. Today\'s muse: nature\'s flowing lines. #ArtisticProcess'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1574182245530-7a6e76b32e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 198,
    comments: 18,
    caption: 'Opening night at the gallery! Thank you to everyone who came. #Exhibition'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1681412355492-134d966ea703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 307,
    comments: 32,
    caption: 'The final touches make all the difference. #DetailsMatter #Sculpture'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1555685812-4b8f59dc8cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 231,
    comments: 21,
    caption: 'Tools of the trade. Each one has its own story. #SculptorStudio'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1638357980344-deaac8297de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 178,
    comments: 16,
    caption: 'Just delivered this commissioned piece to its new home. #SculptureDelivery'
  }
];

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${theme.spacing(3)};
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PostItem = styled(motion.a)`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.medium};
  
  &:before {
    content: '';
    display: block;
    padding-top: 100%; /* Makes it square */
  }
  
  &:hover .post-overlay {
    opacity: 1;
  }
`;

const PostImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.medium};
  
  ${PostItem}:hover & {
    transform: scale(1.05);
  }
`;

const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity ${theme.transitions.medium};
  padding: ${theme.spacing(3)};
  color: ${theme.colors.text.light};
  text-align: center;
`;

const InstagramIcon = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  margin-bottom: ${theme.spacing(3)};
  color: ${theme.colors.secondary.main};
`;

const PostStats = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(3)};
  font-size: ${theme.typography.fontSize.sm};
`;

const PostCaption = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const FollowContainer = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(8)};
  
  a {
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.primary.main};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.lg};
    transition: color ${theme.transitions.short};
    
    svg {
      margin-right: ${theme.spacing(2)};
      font-size: ${theme.typography.fontSize.xl};
    }
    
    &:hover {
      color: ${theme.colors.primary.dark};
    }
  }
`;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const InstagramFeed = () => {
  return (
    <FeedContainer>
      {instagramPosts.map((post, index) => (
        <PostItem
          key={post.id}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          custom={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <PostImage src={post.image} alt={`Instagram post ${post.id}`} />
          <PostOverlay className="post-overlay">
            <InstagramIcon><FaInstagram /></InstagramIcon>
            <PostStats>
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </PostStats>
            <PostCaption>{post.caption}</PostCaption>
          </PostOverlay>
        </PostItem>
      ))}
    </FeedContainer>
  );
};

export default InstagramFeed; 