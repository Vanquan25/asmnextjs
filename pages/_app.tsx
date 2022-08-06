import '../styles/globals.css'
import { AppPropsWithLayout } from '../components/models/layout';
import Layout from '../components/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LatoutWrapper = Component.Layout ?? Layout;
  return (
  <LatoutWrapper>
    <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
  </LatoutWrapper>
  );
}

export default MyApp
