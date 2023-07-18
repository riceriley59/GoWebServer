import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
