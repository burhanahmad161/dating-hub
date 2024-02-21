import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpPage from './signUpPage.js';
import NavBar1 from './navbar.js';
import Home from './home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './about.js';
import MaleData from './maleData.js';
import SignInPage from './SignInPage.js';
import FemaleData from './femaleData.js';
import MixData from './mixData.js';
import Feedback from './feedback.js';
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <React.StrictMode>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<MaleData />} />
        <Route path="/alpha" element={<SignInPage />} />
        <Route path="/femaleData" element={<FemaleData />} />
        <Route path="/mixData" element={<MixData />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
