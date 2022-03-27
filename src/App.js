import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Routes....</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>direct path</h1>} />
          <Route path="/sites" element={<h1>sites path</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
