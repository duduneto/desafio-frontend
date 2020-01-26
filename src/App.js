import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Sc01_Home } from './screens';
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Sc01_Home} />
      </main>
    </Router>
  );
}

export default App;
