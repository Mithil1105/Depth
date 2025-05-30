import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import theme from '../../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary.dark};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing(15)} 0 ${theme.spacing(8)};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(5)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(8)};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-family: ${theme.typography.fontFamily.heading};
    color: ${theme.colors.secondary.main};
    margin-bottom: ${theme.spacing(6)};
    font-size: ${theme.typography.fontSize.xl};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing(3)};
      left: 0;
      width: 40px;
      height: 2px;
      background-color: ${theme.colors.secondary.main};
    }
  }
  
  p {
    margin-bottom: ${theme.spacing(4)};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.6;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: ${theme.colors.text.light};
  margin-bottom: ${theme.spacing(3)};
  transition: color ${theme.transitions.short};
  
  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: ${theme.spacing(4)};
`;

const SocialIcon = styled.a`
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.fontSize.xl};
  margin-right: ${theme.spacing(4)};
  transition: color ${theme.transitions.short};
  
  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};
  
  svg {
    margin-right: ${theme.spacing(3)};
    color: ${theme.colors.secondary.main};
  }

  p {
    margin-bottom: 0;
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: ${theme.spacing(10)} auto 0;
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.6);
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing(3)};
  }
`;

const FooterNav = styled.div`
  display: flex;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SmallLink = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.typography.fontSize.sm};
  margin-left: ${theme.spacing(4)};
  transition: color ${theme.transitions.short};
  
  &:hover {
    color: ${theme.colors.secondary.main};
  }
  
  @media (max-width: 576px) {
    margin: ${theme.spacing(2)} 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>About Us</h4>
          <p>At Depth & Dimension, we transform clay, stone, and imagination into timeless masterpieces, preserving the soul of sculpture through handmade, intricate forms.</p>
          <SocialLinks>
            <SocialIcon href="https://www.instagram.com/depth_n_dimension/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://g.co/kgs/wqSB6U8" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/commissions">Commissions</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <h4>Contact Us</h4>
          <ContactItem>
            <FaMapMarkerAlt />
            <p>WP-46, Sanand GIDC, Bol Gam, Sanand 382110</p>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <p><a href="mailto:depthndimension@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>depthndimension@gmail.com</a></p>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>© {new Date().getFullYear()} Depth & Dimension. All rights reserved.</Copyright>
        <FooterNav>
          <SmallLink to="/privacy-policy">Privacy Policy</SmallLink>
          <SmallLink to="/terms-of-service">Terms of Service</SmallLink>
          <SmallLink to="/sitemap">Sitemap</SmallLink>
        </FooterNav>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 