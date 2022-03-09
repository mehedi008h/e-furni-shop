import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./container/Banner/Banner";
import Company from "./container/company/Company";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Company />
    </div>
  );
};

export default App;
