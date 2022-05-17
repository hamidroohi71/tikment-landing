import React from "react";
import Advantage from "./components/Advantage";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Customer from "./components/Customer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageIntro from "./components/PageIntro";
import Product from "./components/Products";
import SalesService from "./components/salesService";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
