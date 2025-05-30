import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaBars, FaTimes } from 'react-icons/fa';
import theme from '../../styles/theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(254, 251, 243, 0.85); /* Always a subtle background */
  backdrop-filter: blur(6px);
  transition: all ${theme.transitions.medium};
  box-shadow: ${props => props.scrolled ? theme.shadows.small : 'none'};
  padding: ${props => props.scrolled ? theme.spacing(3) : theme.spacing(6)} 0;
  @media (max-width: 576px) {
    padding: ${theme.spacing(2)} 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(5)};
  @media (max-width: 576px) {
    padding: 0 ${theme.spacing(2)};
  }
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fontFamily.heading};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.primary.main};
  text-shadow: none;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1001;
  transition: color ${theme.transitions.short};
  
  span {
    color: ${theme.colors.secondary.main};
  }
  
  &:hover {
    color: ${theme.colors.primary.light};
  }
  @media (max-width: 576px) {
    font-size: ${theme.typography.fontSize.lg};
  }
  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: ${theme.colors.background.main};
    padding: ${theme.spacing(20)} ${theme.spacing(5)};
    transition: all ${theme.transitions.long};
    z-index: 1000;
    box-shadow: ${theme.shadows.large};
  }
`;

const NavLink = styled(Link)`
  margin: 0 ${theme.spacing(4)};
  color: ${theme.colors.text.primary};
  text-shadow: none;
  font-weight: ${theme.typography.fontWeight.medium};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing(1)};
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.secondary.main};
    transition: width ${theme.transitions.medium};
  }
  
  &:hover {
    color: ${theme.colors.secondary.main};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: ${theme.spacing(3)} 0;
    color: ${theme.colors.text.primary};
    text-shadow: none;
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize['2xl']};
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo to="/" scrolled={scrolled}>
          Depth <span>&</span> Dimension
        </Logo>

        <MobileMenuButton onClick={toggleMenu} scrolled={scrolled}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" scrolled={scrolled}>Home</NavLink>
          <NavLink to="/about" scrolled={scrolled}>About</NavLink>
          <NavLink to="/projects" scrolled={scrolled}>Projects</NavLink>
          <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
        </NavLinks>

        <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 