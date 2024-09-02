import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact.jsx';
import faqs from './pages/faqs.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-WCZPKJM8X1');

export default function App() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faqs" component={faqs} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Product} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
