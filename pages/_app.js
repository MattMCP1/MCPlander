import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/footer";
import Header from "../src/componants/Header/header";
import { useState, useEffect } from "react";

// import { useRouter } from "next/router";
import Loading from "../src/componants/Loading";
function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  // const routers = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Loading loading={loading} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
