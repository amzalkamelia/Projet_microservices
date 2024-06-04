import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SportList from './components/SportList';
import AddSport from './components/AddSport';
import UpdateSport from './components/UpdateSport';

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
            <Route path="/" element={<SportList />} />
            <Route path="/sports" element={<SportList />} />
            <Route path="/add-sport" element={<AddSport />} />
            <Route path="/update-sport/:id" element={<UpdateSport />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
