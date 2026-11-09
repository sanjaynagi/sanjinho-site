import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import palette from './palettes';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const fonts = {
  heading: `Cal Sans, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`
};

// Turn a palette's light/dark pair into mode-aware semantic tokens, so a
// component writes `bg="brand.surface"` and gets the right value in each mode.
const buildSemanticTokens = ({ light, dark }) => {
  const tokens = {};
  Object.keys(light).forEach(key => {
    if (key === 'wash') return;
    tokens[`brand.${key}`] = { default: light[key], _dark: dark[key] };
  });
  // `warmGray` is the old name for `muted`; both are still used in places.
  tokens['brand.warmGray'] = tokens['brand.muted'];
  return { colors: tokens };
};

const washGradient = wash =>
  wash
    .map(
      ({ x, y, w, h, color }) =>
        `radial-gradient(ellipse ${w}% ${h}% at ${x}% ${y}%, ${color}, transparent 72%)`
    )
    .join(', ');

const buildTheme = () => {
  const { light, dark } = palette;

  const styles = {
    global: props => ({
      body: {
        bg: 'brand.ground',
        color: 'brand.ink',
        backgroundImage: mode(
          washGradient(light.wash),
          washGradient(dark.wash)
        )(props),
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: mode(0.025, 0.04)(props),
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          pointerEvents: 'none',
          zIndex: -1
        }
      },
      '::selection': {
        bg: 'brand.selection',
        color: 'brand.ink'
      }
    })
  };

  const components = {
    Heading: {
      baseStyle: {
        color: 'brand.ink',
        letterSpacing: '-0.02em'
      },
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

  return extendTheme({
    config,
    // Raw (non-mode-aware) colours that components read through `useTheme()`,
    // e.g. the syntax highlighter, which cannot take a CSS variable.
    colors: { code: palette.code },
    semanticTokens: buildSemanticTokens(palette),
    styles,
    components,
    fonts
  });
};

export default buildTheme();
