import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Router exact path="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
