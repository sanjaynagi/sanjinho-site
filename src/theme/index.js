import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

// Raw palette. The leaf greens come in a light-ground and a dark-ground pair:
// a single mid-green cannot hold its contrast against both, so the brand
// tokens below resolve to whichever member of the pair suits the mode.
const colors = {
  leaf: {
    deep: '#2e6e3a',
    mid: '#33763f',
    bright: '#68b573',
    moss: '#647f38',
    mossLight: '#9ec46a'
  },
  ground: {
    light: '#eaf3dd',
    dark: '#0f1c12'
  },
  brand: {
    ink: '#16241a',
    parchment: '#e2ebdd'
  }
};

// `brand.primary` and friends are mode-aware, so components can use one token
// instead of pairing two literals through useColorModeValue.
const semanticTokens = {
  colors: {
    'brand.primary': { default: 'leaf.mid', _dark: 'leaf.bright' },
    'brand.secondary': { default: 'leaf.moss', _dark: 'leaf.mossLight' },
    'brand.accent': { default: 'leaf.mid', _dark: 'leaf.bright' },
    'brand.browser': { default: 'leaf.mid', _dark: 'leaf.bright' },
    'brand.muted': { default: '#53694f', _dark: '#a3b6a4' },
    'brand.warmGray': { default: '#53694f', _dark: '#a3b6a4' },
    'brand.surface': {
      default: 'rgba(51, 118, 63, 0.07)',
      _dark: 'rgba(158, 196, 106, 0.09)'
    },
    'brand.surfaceHover': {
      default: 'rgba(51, 118, 63, 0.12)',
      _dark: 'rgba(158, 196, 106, 0.14)'
    },
    'brand.line': {
      default: 'rgba(46, 110, 58, 0.16)',
      _dark: 'rgba(158, 196, 106, 0.18)'
    }
  }
};

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.ground.light, colors.ground.dark)(props),
      color: mode(colors.brand.ink, colors.brand.parchment)(props),
      backgroundImage: mode(
        'radial-gradient(ellipse 95% 60% at 50% -15%, rgba(120, 162, 74, 0.62), transparent 74%), radial-gradient(ellipse 75% 50% at 105% 105%, rgba(46, 110, 58, 0.42), transparent 72%), radial-gradient(ellipse 65% 45% at -10% 55%, rgba(120, 162, 74, 0.34), transparent 70%)',
        'radial-gradient(ellipse 95% 60% at 50% -15%, rgba(104, 181, 115, 0.22), transparent 74%), radial-gradient(ellipse 75% 50% at 105% 105%, rgba(158, 196, 106, 0.16), transparent 72%), radial-gradient(ellipse 65% 45% at -10% 55%, rgba(104, 181, 115, 0.13), transparent 70%)'
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
      bg: mode('rgba(51, 118, 63, 0.24)', 'rgba(104, 181, 115, 0.35)')(props),
      color: mode(colors.brand.ink, colors.brand.parchment)(props)
    }
  })
};

const components = {
  Heading: {
    baseStyle: props => ({
      color: mode(colors.brand.ink, colors.brand.parchment)(props),
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
    baseStyle: {
      borderColor: 'brand.line'
    }
  }
};

const fonts = {
  heading: `Cal Sans, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`
};

const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  styles,
  components,
  fonts
});

export default theme;
