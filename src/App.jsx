import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route to="/" component={Home} />
          <Route to="/about" component={About} />
          <Route to="/product" component={Product} />
          <Route to="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
