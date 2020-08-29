import { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme, { Theme } from '../app/theme';
import GlobalStyle from '../app/components/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
