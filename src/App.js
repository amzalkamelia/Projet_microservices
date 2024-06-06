import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlanningList from './components/PlanningList';
import AddPlanning from './components/AddPlanning';
import UpdatePlanning from './components/UpdatePlanning';

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
            <Route path="/" element={<PlanningList />} />
            <Route path="/plannings" element={<PlanningList />} />
            <Route path="/add-planning" element={<AddPlanning />} />
            <Route path="/update-planning/:id" element={<UpdatePlanning />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
