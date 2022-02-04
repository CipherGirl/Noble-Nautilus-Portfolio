import Layout from "../components/Layout";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import MainNavigation from "../components/MainNavigation";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <MainNavigation />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />{" "}
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
