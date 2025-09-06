import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortenerPage from './pages/UrlShortenerPage';
import UrlStatisticsPage from './pages/UrlStatisticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/stats" element={<UrlStatisticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
