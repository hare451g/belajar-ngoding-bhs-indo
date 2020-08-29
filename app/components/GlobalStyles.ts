import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ theme: { color, typography } }) => css`
    * {
      box-sizing: border-box;
    }

    :root {
      font-size: ${typography.fontSize.desktop};
      font-family: ${typography.fontFamily['sans-serif']};
      color: ${color.textPrimary};
    }

    body {
      background: ${color.background};
      margin: 0px;
      padding: 0px;
    }
  `
);

export default GlobalStyle;
