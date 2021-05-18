import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact.jsx';
import Learn from './pages/Learn.jsx';
import terms from './pages/terms.jsx';
import privacy from './pages/privacy.jsx';
import cookie from './pages/cookie.jsx';
import Community from './pages/Community.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Product} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/community" component={Community} />
          <Route path="/terms" component={terms} />
          <Route path="/privacy" component={privacy} />
          <Route path="/cookie" component={cookie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
