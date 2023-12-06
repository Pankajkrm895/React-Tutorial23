import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import { BrowserRouter, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
       <Route path="/" component={Home} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
