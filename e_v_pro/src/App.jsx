import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Fetch from './crud_exp/select';

function App() {
  return (
    
 
      <Routes>
        <Route path="/select" element={<Fetch />} />
         </Routes>

  );
}

export default App;
