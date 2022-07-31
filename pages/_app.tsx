import '../styles/globals.css'
import { AppPropsWithLayout } from '../components/models/layout';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LatoutWrapper = Component.Layout ?? Layout;
  return (
  <LatoutWrapper>
    <Component {...pageProps} />
  </LatoutWrapper>
  );
}

export default MyApp
