import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./container/about/About";
import Banner from "./container/Banner/Banner";
import Company from "./container/company/Company";
import Deals from "./container/deals/Deals";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Company />
      <Deals />
      <About />
    </div>
  );
};

export default App;
