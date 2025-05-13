import { css } from '@emotion/react';
import theme from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font-family: ${theme.typography.fontFamily.body};
    font-size: 16px;
    line-height: 1.6;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacing(3)};
    line-height: 1.2;
  }
  
  h1 {
    font-size: ${theme.typography.fontSize['5xl']};
  }
  
  h2 {
    font-size: ${theme.typography.fontSize['4xl']};
  }
  
  h3 {
    font-size: ${theme.typography.fontSize['3xl']};
  }
  
  h4 {
    font-size: ${theme.typography.fontSize['2xl']};
  }
  
  h5 {
    font-size: ${theme.typography.fontSize.xl};
  }
  
  h6 {
    font-size: ${theme.typography.fontSize.lg};
  }
  
  p {
    margin-bottom: ${theme.spacing(4)};
  }
  
  a {
    color: ${theme.colors.primary.main};
    text-decoration: none;
    transition: color ${theme.transitions.short};
    
    &:hover {
      color: ${theme.colors.primary.light};
    }
  }
  
  button {
    cursor: pointer;
    font-family: ${theme.typography.fontFamily.body};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ul, ol {
    margin-left: ${theme.spacing(5)};
    margin-bottom: ${theme.spacing(4)};
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing(5)};
  }
  
  section {
    padding: ${theme.spacing(20)} 0;
  }
  
  .btn {
    display: inline-block;
    padding: ${theme.spacing(3)} ${theme.spacing(6)};
    border-radius: ${theme.borderRadius.medium};
    font-weight: ${theme.typography.fontWeight.medium};
    text-align: center;
    transition: all ${theme.transitions.medium};
    border: none;
    
    &.btn-primary {
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.text.light};
      
      &:hover {
        background-color: ${theme.colors.primary.dark};
      }
    }
    
    &.btn-secondary {
      background-color: ${theme.colors.secondary.main};
      color: ${theme.colors.text.primary};
      
      &:hover {
        background-color: ${theme.colors.secondary.dark};
        color: ${theme.colors.text.light};
      }
    }
    
    &.btn-outline {
      background-color: transparent;
      border: 2px solid ${theme.colors.primary.main};
      color: ${theme.colors.primary.main};
      
      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.text.light};
      }
    }
  }
  
  .text-center {
    text-align: center;
  }
  
  .fadeIn {
    animation: fadeIn 1s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .section-title {
    position: relative;
    margin-bottom: ${theme.spacing(10)};
    
    &:after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing(3)};
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${theme.colors.primary.main};
    }
    
    &.text-center:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export default globalStyles; 