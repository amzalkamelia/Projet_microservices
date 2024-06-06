import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';
import UpdateEvent from './components/UpdateEvent';

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
            <Route path="/" element={<EventList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/update-event/:id" element={<UpdateEvent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
