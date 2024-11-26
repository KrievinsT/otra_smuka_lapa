import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import PropertiesDetails from "./pages/PropertiesDetails";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/PropertiesDetails" element={<PropertiesDetails />} />
          </Routes>
        </main>
        <CTASection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
