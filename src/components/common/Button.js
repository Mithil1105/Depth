import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

const StyledButton = styled.button`
  display: inline-block;
  padding: ${props => props.size === 'large'
        ? `${theme.spacing(4)} ${theme.spacing(8)}`
        : props.size === 'small'
            ? `${theme.spacing(2)} ${theme.spacing(4)}`
            : `${theme.spacing(3)} ${theme.spacing(6)}`
    };
  font-size: ${props => props.size === 'large'
        ? theme.typography.fontSize.lg
        : props.size === 'small'
            ? theme.typography.fontSize.sm
            : theme.typography.fontSize.md
    };
  border-radius: ${theme.borderRadius.medium};
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  border: 2px solid transparent;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.uppercase ? '1px' : 'normal'};
  background: ${props =>
        props.variant === 'primary' ? theme.gradients.primary :
            props.variant === 'secondary' ? theme.colors.secondary.main :
                props.variant === 'outline-primary' ? 'transparent' :
                    props.variant === 'outline-secondary' ? 'transparent' :
                        props.variant === 'text' ? 'transparent' :
                            theme.gradients.primary
    };
  color: ${props =>
        props.variant === 'primary' ? theme.colors.text.light :
            props.variant === 'secondary' ? theme.colors.text.primary :
                props.variant === 'outline-primary' ? theme.colors.primary.main :
                    props.variant === 'outline-secondary' ? theme.colors.secondary.main :
                        props.variant === 'text' ? theme.colors.primary.main :
                            theme.colors.text.light
    };
  border-color: ${props =>
        props.variant === 'outline-primary' ? theme.colors.primary.main :
            props.variant === 'outline-secondary' ? theme.colors.secondary.main :
                'transparent'
    };
  box-shadow: ${props => props.elevation ? theme.shadows.small : 'none'};
  
  &:hover {
    background: ${props =>
        props.variant === 'primary' ? theme.colors.primary.dark :
            props.variant === 'secondary' ? theme.colors.secondary.dark :
                props.variant === 'outline-primary' ? theme.colors.primary.main :
                    props.variant === 'outline-secondary' ? theme.colors.secondary.main :
                        props.variant === 'text' ? 'rgba(74, 93, 75, 0.1)' :
                            theme.colors.primary.dark
    };
    color: ${props =>
        props.variant === 'primary' ? theme.colors.text.light :
            props.variant === 'secondary' ? theme.colors.text.light :
                props.variant === 'outline-primary' ? theme.colors.text.light :
                    props.variant === 'outline-secondary' ? theme.colors.text.primary :
                        props.variant === 'text' ? theme.colors.primary.dark :
                            theme.colors.text.light
    };
    transform: ${props => props.elevation ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.elevation ? theme.shadows.medium : 'none'};
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    border-color: transparent;
    box-shadow: none;
  }
`;

const StyledLink = StyledButton.withComponent(Link);

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    to,
    uppercase = false,
    elevation = false,
    onClick,
    disabled,
    ...props
}) => {
    if (to) {
        return (
            <StyledLink
                to={to}
                variant={variant}
                size={size}
                uppercase={uppercase}
                elevation={elevation}
                {...props}
            >
                {children}
            </StyledLink>
        );
    }

    return (
        <StyledButton
            type={type}
            variant={variant}
            size={size}
            uppercase={uppercase}
            elevation={elevation}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button; 