import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar appears on all pages */}
        <main className="flex-grow flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page-one" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
};

export default App;
