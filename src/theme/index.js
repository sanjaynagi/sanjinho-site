import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const styles = {
  global: props => ({
    body: {
      bg: mode('#fffff2', '#5c5e5b')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  }
};

const fonts = {
  heading: `Cal Sans, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`
};

const theme = extendTheme({ config, styles, components, fonts });

export default theme;
