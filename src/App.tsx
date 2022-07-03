import React, { useState } from "react";
import Advantage from "./components/Advantage";
import Comments from "./components/Comments";
import LastSec from "./components/LastSec";
import Customer from "./components/Customer";
import Header from "./components/Header";
import InitialVideo from "./components/initialVideo";
import PageIntro from "./components/PageIntro";
import Product from "./components/Products";
import SalesService from "./components/salesService";
import ScrollBody from "./components/ScrollBody";

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => {
    console.log("loaded");
    setLoaded(true);
  };

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
              <LastSec />
            </>
          </ScrollBody>
        </>
      ) : (
        <InitialVideo handleLoaded={handleLoaded} />
      )}
    </div>
  );
}

export default App;
