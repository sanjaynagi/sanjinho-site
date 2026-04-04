import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  brand: {
    primary: '#c45d3e',
    secondary: '#6b8f71',
    accent: '#c45d3e',
    browser: '#c45d3e',
    ink: '#1a1a1a',
    muted: '#7a756e',
    warmGray: '#b8b2a8'
  }
};

const styles = {
  global: props => ({
    body: {
      bg: mode('#fffff2', '#1c1917')(props),
      color: mode('#1a1a1a', '#e8e0d4')(props),
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: mode(0.03, 0.05)(props),
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        pointerEvents: 'none',
        zIndex: -1
      }
    },
    '::selection': {
      bg: mode('rgba(196, 93, 62, 0.2)', 'rgba(196, 93, 62, 0.35)')(props),
      color: mode('#1a1a1a', '#e8e0d4')(props)
    }
  })
};

const components = {
  Heading: {
    baseStyle: props => ({
      color: mode('#1a1a1a', '#e8e0d4')(props),
      letterSpacing: '-0.02em'
    }),
    variants: {
      'section-title': {
        textDecoration: 'none',
        fontSize: 22,
        marginTop: 3,
        marginBottom: 4,
        position: 'relative',
        display: 'inline-block',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-4px',
          left: 0,
          width: '40px',
          height: '3px',
          bg: 'brand.primary',
          borderRadius: '2px'
        }
      }
    }
  },
  Link: {
    baseStyle: {
      transition: 'color 0.2s ease'
    }
  },
  Divider: {
    baseStyle: props => ({
      borderColor: mode('rgba(26, 26, 26, 0.1)', 'rgba(232, 224, 212, 0.12)')(props)
    })
  }
};

const fonts = {
  heading: `'Plus Jakarta Sans', ${base.fonts.heading}`,
  body: `'Libre Franklin', ${base.fonts.body}`
};

const theme = extendTheme({ config, colors, styles, components, fonts });

export default theme;
