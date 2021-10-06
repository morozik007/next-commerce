import '../styles/globals.css';
import { useEffect } from 'react';
import { StoreProvider } from '../utils/Store';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
