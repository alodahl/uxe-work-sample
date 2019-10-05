import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import Controls from './components/Controls'

const App = () => {

    return (
      <Router>
        <div className="App">
          <Header/>
          <FilterBar/>
          <Controls/>
        </div>
      </Router>
    );
}

export default App;
