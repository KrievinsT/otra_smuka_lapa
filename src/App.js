import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import PropertiesDetails from "./pages/PropertiesDetails";
import Navbar from "./components/NavBar"; // Import the Navbar component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/PropertiesDetails" element={<PropertiesDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white text-black py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p>© All rights reserved. Flowfye.</p>
            <p>Powered by Webflow.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
