import React, { useState, useEffect } from "react";
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
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import { useSection } from "./context/sectionStore";
import { useWheel } from "react-use-gesture";
import useWidth from "./hooks/useWidth";
const { Lethargy } = require("lethargy");

function App() {
  const [loaded, setLoaded] = useState(false);
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const width = useWidth();

  useEffect(() => {
    if (activeSection === 6) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const prevSectionHandler = () => {
    setNextSection(7);
    setActiveSection(null);
  };

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s > 0) {
              prevSectionHandler();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  const handleLoaded = () => {
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
              <Advantage />
              <Customer />
              {/* <Product /> */}
              <SalesService />
              {/* <Comments /> */}
              <FAQ />
              <LastSec />
              <AboutUs />
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
