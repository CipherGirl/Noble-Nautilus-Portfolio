import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  ); 
}

export default MyApp
