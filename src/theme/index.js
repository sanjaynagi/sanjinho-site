import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  brand: {
    primary: '#3f8a4f',
    secondary: '#86a35c',
    accent: '#3f8a4f',
    browser: '#3f8a4f',
    ink: '#16241a',
    muted: '#5f7561',
    warmGray: '#a3b6a4'
  }
};

const styles = {
  global: props => ({
    body: {
      bg: mode('#f3f8ea', '#131a14')(props),
      color: mode('#16241a', '#e2ebdd')(props),
      backgroundImage: mode(
        'radial-gradient(ellipse 90% 55% at 50% -15%, rgba(134, 163, 92, 0.38), transparent 72%), radial-gradient(ellipse 70% 45% at 105% 105%, rgba(63, 138, 79, 0.22), transparent 72%), radial-gradient(ellipse 60% 40% at -10% 60%, rgba(134, 163, 92, 0.16), transparent 70%)',
        'radial-gradient(ellipse 90% 55% at 50% -15%, rgba(134, 163, 92, 0.16), transparent 72%), radial-gradient(ellipse 70% 45% at 105% 105%, rgba(63, 138, 79, 0.14), transparent 72%), radial-gradient(ellipse 60% 40% at -10% 60%, rgba(63, 138, 79, 0.10), transparent 70%)'
      )(props),
      backgroundAttachment: 'fixed',
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
      bg: mode('rgba(63, 138, 79, 0.2)', 'rgba(63, 138, 79, 0.35)')(props),
      color: mode('#16241a', '#e2ebdd')(props)
    }
  })
};

const components = {
  Heading: {
    baseStyle: props => ({
      color: mode('#16241a', '#e2ebdd')(props),
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
          bgGradient: 'linear(to-r, brand.primary, brand.secondary)',
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
      borderColor: mode('rgba(22, 36, 26, 0.1)', 'rgba(226, 235, 221, 0.12)')(props)
    })
  }
};

const fonts = {
  heading: `'Plus Jakarta Sans', ${base.fonts.heading}`,
  body: `'Libre Franklin', ${base.fonts.body}`
};

const theme = extendTheme({ config, colors, styles, components, fonts });

export default theme;
