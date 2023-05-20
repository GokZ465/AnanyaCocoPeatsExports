import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./pages/HomePage/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Products = lazy(() => import("./pages/Products/Products"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const FaqSection = lazy(() => import("./pages/Product/FaqSection"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Services} />
          <Route path="/products" component={FaqSection} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
