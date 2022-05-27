import React, { useState } from "react";
import Advantage from "./components/Advantage";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Customer from "./components/Customer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialVideo from "./components/initialVideo";
import PageIntro from "./components/PageIntro";
import Product from "./components/Products";
import SalesService from "./components/salesService";
import ScrollBody from "./components/ScrollBody";

function App() {
  const [loaded, setLoaded] = useState(true);

  setTimeout(() => {
    setLoaded(true);
  }, 21000);

  return (
    <div>
      {loaded ? (
        <>
          <ScrollBody>
            <>
              <Header />
              <PageIntro />
              <Customer />
              <Product />
              <Advantage />
              <SalesService />
              <Comments />
              <Contact />
              <FAQ />
              <Footer />
            </>
          </ScrollBody>
        </>
      ) : (
        <InitialVideo />
      )}
    </div>
  );
}

export default App;
