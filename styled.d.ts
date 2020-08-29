import 'styled-components';

import { Theme } from './app/theme';
import { Color } from './app/theme/colors';
import { Typography } from './app/theme/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}
