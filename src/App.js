import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';  

import Home from './components/Home';
import Article from './components/article.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/article/:id" component={Article} />
      </Router>
    </div>
  );
}

export default App;