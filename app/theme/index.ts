import color, { Color } from './colors';
import typography, { Typography } from './typography';

export interface Theme {
  color: Color;
  typography: Typography;
}

const light: Theme = {
  color: {
    all: color,
    background: color.lightGray2,
    textPrimary: color.darkGray6,
    textSecondary: color.darkGray2,
    border: color.darkGray,
    link: color.blue,
  },
  typography,
};

const dark: Theme = {
  color: {
    all: color,
    background: color.darkGray6,
    textPrimary: color.lightGray6,
    textSecondary: color.lightGray4,
    border: color.lightGray6,
    link: color.blue,
  },

  typography,
};

export default { light, dark };
