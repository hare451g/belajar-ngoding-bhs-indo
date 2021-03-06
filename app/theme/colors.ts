enum colors {
  blue = 'rgb(0,122,255)',
  blueDark = 'rgb(10,132,255)',
  green = 'rgb(25,199,89)',
  greenDark = 'rgb(48,209,88)',
  indigo = 'rgb(88,86,214)',
  indigoDark = 'rgb(94,92,230)',
  orange = 'rgb(255,149,0)',
  orangeDark = 'rgb(255,159,10)',
  pink = 'rgb(255,45,85)',
  pinkDark = 'rgb(255,55,95)',
  purple = 'rgb(175,82,222)',
  purpleDark = 'rgb(191,90,242)',
  red = 'rgb(255,59,48)',
  redDark = 'rgb(255,69,58)',
  teal = 'rgb(90,200,250)',
  tealDark = 'rgb(100,210,250)',
  lightGray = 'rgb(142,142,147)',
  lightGray2 = 'rgb(174,174,178)',
  lightGray3 = 'rgb(199,199,204)',
  lightGray4 = 'rgb(209,209,214)',
  lightGray5 = 'rgb(229,229,234)',
  lightGray6 = 'rgb(242,242,247)',
  lightGray7 = 'rgb(250,250,250)',
  darkGray = 'rgb(142,142,147)',
  darkGray2 = 'rgb(99,99,102)',
  darkGray3 = 'rgb(72,72,74)',
  darkGray4 = 'rgb(58,58,60)',
  darkGray5 = 'rgb(44,44,46)',
  darkGray6 = 'rgb(28,28,30)',
}

type colorKey = keyof typeof colors;
type colorValue = typeof colors[colorKey];

export interface Color {
  all: typeof colors;
  background: colorValue;
  textPrimary: colorValue;
  textSecondary: colorValue;
}

export default colors;
