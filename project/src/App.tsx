import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { AdminPanel } from './pages/AdminPanel';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;