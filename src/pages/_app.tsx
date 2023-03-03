import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from 'src/component/utils';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
