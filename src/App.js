import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    </div>
  );
}

export default App;
