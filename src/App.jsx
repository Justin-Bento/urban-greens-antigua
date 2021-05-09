import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Product_Item from './pages/Product_Item.jsx';
import Contact from './pages/Contact.jsx';
import Learn from './pages/Learn.jsx';
import Header from './components/Header.jsx';
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
          <Route path="/product" component={Product} />
          <Route path="/product/:id" component={Product_Item} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
