import Typography from "typography";
import moragaTheme from 'typography-theme-moraga';

moragaTheme.baseFontSize = '16px';
moragaTheme.overrideStyles = ({rhythm}, options, styles) => ({
  a: {
    color: 'hsla(0, 0%, 0%, 0.47)'
  },
  'a:hover': {
    color: 'hsla(0, 0%, 0%, 1)'
  }
});
const typography = new Typography(moragaTheme);

export default typography;