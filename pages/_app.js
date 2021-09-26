import { NextIntlProvider } from 'next-intl';
import '../styles/global.css'
import Layout from '../layouts';

/**
 * Application component runs for each page request, and initiate the components for rendering.
 * @param {*} props 
 * @returns 
 */
function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  )
}

export default MyApp
