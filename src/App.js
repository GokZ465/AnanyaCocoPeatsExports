import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import FaqSection from "./pages/Product/FaqSection";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={Services} />
        <Route path="/products" component={FaqSection} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
