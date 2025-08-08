import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateResume from './pages/CreateResume';
import ContentTips from './pages/ContentTips';
import EmployerTips from './pages/EmployerTips';
import PreviewResume from './pages/PreviewResume';
import InterviewPrep from './pages/InterviewPrep';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateResume />} />
        <Route path="/tips/content" element={<ContentTips />} />
        <Route path="/tips/employers" element={<EmployerTips />} />
        <Route path="/preview" element={<PreviewResume />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
