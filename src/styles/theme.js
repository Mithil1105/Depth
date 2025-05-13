const theme = {
    colors: {
        primary: {
            main: '#4A5D4B', // sage green
            light: '#6B7D6C', // light sage
            dark: '#374838', // dark sage
        },
        secondary: {
            main: '#E5B299', // warm terracotta (keeping this for contrast)
            light: '#FCDEC0', // light sandstone
            dark: '#B4846C', // darker terracotta
        },
        accent: {
            green: '#7D8F69', // olive green
            sage: '#A4B494', // light olive
            sand: '#E5E5CB', // off-white/sand
            terracotta: '#C17F59', // warm accent
        },
        text: {
            primary: '#2C3A2D', // dark sage for text
            secondary: '#5C6B5D', // muted sage
            light: '#FFFFFF',
        },
        background: {
            main: '#F5F7F2', // very light sage
            paper: '#FFFFFF',
            dark: '#E8EDE3', // light sage/gray
            sage: '#EFF2EA', // subtle sage tint
        }
    },
    typography: {
        fontFamily: {
            heading: "'Playfair Display', serif",
            body: "'Open Sans', sans-serif",
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
        }
    },
    spacing: (multiplier = 1) => `${4 * multiplier}px`,
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        circle: '50%',
    },
    shadows: {
        small: '0 2px 8px rgba(74, 93, 75, 0.1)',
        medium: '0 4px 12px rgba(74, 93, 75, 0.12)',
        large: '0 8px 24px rgba(74, 93, 75, 0.15)',
    },
    transitions: {
        short: '0.2s ease',
        medium: '0.3s ease',
        long: '0.5s ease',
    },
    gradients: {
        primary: 'linear-gradient(135deg, #4A5D4B 0%, #7D8F69 100%)',
        secondary: 'linear-gradient(135deg, #E5B299 0%, #FCDEC0 100%)',
        dark: 'linear-gradient(rgba(55, 72, 56, 0.8), rgba(55, 72, 56, 0.95))',
    }
};

export default theme; 