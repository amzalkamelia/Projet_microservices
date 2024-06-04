import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteList from './components/SiteList';
import AddSite from './components/AddSite';
import UpdateSite from './components/UpdateSite';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<SiteList />} />
            <Route path="/sites" element={<SiteList />} />
            <Route path="/add-site" element={<AddSite />} />
            <Route path="/update-site/:id" element={<UpdateSite />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
