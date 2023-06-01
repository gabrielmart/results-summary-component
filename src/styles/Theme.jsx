import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    foreground: {
      lightRed: 'hsla(0, 100%, 67%, 1)',
      orangeyYellow: 'hsla(39, 100%, 56%, 1)',
      greenTeal: 'hsla(166, 100%, 37%, 1)',
      cobaltBlue: 'hsla(234, 85%, 45%, 1)',
      white: 'hsla(0, 0%, 100%,1)',
      paleBlue: 'hsla(221, 100%, 96%, 1)',
      lightLavander: 'hsla(241, 100%, 89%, 1)',
      darkGrayBlue: 'hsla(224, 30%, 27%, 1)',
      darkGrayBlueLight: 'hsla(224, 30%, 27%, 0.6)'
    },
    background: {
      lightRed: 'hsla(0, 100%, 67%, 0.15)',
      orangeyYellow: 'hsla(39, 100%, 56%, 0.15)',
      greenTeal: 'hsla(166, 100%, 37%, 0.15)',
      cobaltBlue: 'hsla(234, 85%, 45%, 0.15)'
    },
    gradients: {
      lightSlateBlue: 'hsla(252, 100%, 67%, 1)',
      lightRoyalBlue: 'hsla(241, 81%, 54%, 1)',
      violetBlue: 'hsla(256, 72%, 46%, 1)',
      persianBlue: 'hsla(241, 72%, 46%, 0)'
    }
  },
  fonts: {
    family: {
      default: "'Hanken Grotesk', sans-serif"
    }
  },
  fontSizes: {
    small: '1.8rem',
    medium: '2.4rem',
    large: '3.6rem'
  },
  fontWeights: {
    medium: '500',
    bold: '700',
    xbold: '800'
  }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.node
};

export default Theme;
