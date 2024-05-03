import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar1 from './navbar.js';
import Home from './home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Confession from './confessions.js';
import Feedback from './feedback.js';
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <React.StrictMode>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();