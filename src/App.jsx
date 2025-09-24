import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import OurWork from './components/OurWork';
import GetInTouch from './components/GetInTouch';
import WorkWithUs from './components/WorkWithUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
