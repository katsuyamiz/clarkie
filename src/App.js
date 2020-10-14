import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
import HomePage from './components/pages/main';
import BlogPage from './components/pages/blog';

function App() {

 
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/blog" component={BlogPage} />
    </Switch>
  </Router>
  )
}

export default App;
