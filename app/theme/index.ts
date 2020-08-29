import colors, { Color } from './colors';

interface Theme {
  color: Color;
}

const light: Theme = {
  color: {
    all: colors,
    background: colors.lightGray7,
    textPrimary: colors.darkGray6,
    textSecondary: colors.darkGray2,
  },
};

const dark: Theme = {
  color: {
    all: colors,
    background: colors.darkGray2,
    textPrimary: colors.lightGray6,
    textSecondary: colors.lightGray4,
  },
};

export default { light, dark };
