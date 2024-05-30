import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import Navbar from './Navbar';
import Login from './Login';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/:type/:id" element={<DetailPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
};

export default App;