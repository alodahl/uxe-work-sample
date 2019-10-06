import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import Controls from './components/Controls'

const App = () => {

    return (
      <Router>
        <div className="App" style={{color: "#555"}}>
          <Header/>
          <FilterBar/>
          <Controls/>
        </div>
      </Router>
    );
}

export default App;
