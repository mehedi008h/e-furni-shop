import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./container/about/About";
import Banner from "./container/Banner/Banner";
import Client from "./container/client/Client";
import Company from "./container/company/Company";
import Deals from "./container/deals/Deals";
import Products from "./container/products/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Company />
      <Deals />
      <About />
      <Products />
      <Client />
      <Footer />
    </div>
  );
};

export default App;
