import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultPage from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
