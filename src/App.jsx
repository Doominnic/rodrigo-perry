import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Services from "./pages/services";
import Career from "./pages/Career";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <Router>
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/career" element={<Career language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/gallery" element={<Gallery language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
