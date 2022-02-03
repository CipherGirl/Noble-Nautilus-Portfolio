import Layout from '../components/Layout'
import '../styles/globals.css'
import SocialFollow from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SocialFollow />
    </>
  ); 
}

export default MyApp
