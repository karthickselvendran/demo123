import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Routes....</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>/ only</h1>} />
          <Route path='signin' element={<h1>/ signin</h1>} />
          <Route path='signup' element={<h1>/ signup</h1>} />
          <Route path='todolist' element={<h1>/ todolist</h1>} />
          <Route path='*' element={
            <main className='wrongRoute'>
              <p>There's nothing here, Please check the url!</p>
            </main>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
