import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./../App.css";
import PropTypes from "prop-types";

function Navbar({ language, setLanguage }) {
  const toggleLanguage = lang => {
    setLanguage(lang);
  };

  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight - 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-menu">
        {location.pathname !== "/" && (
          <NavLink
            to="/"
            className={`home-item ${isScrolled ? "home-item-scrolled" : ""}`}
          >
            <p>RODRIGO</p>
            <p>PERRY</p>
          </NavLink>
        )}
        <NavLink className="menu-item" to="/services" activeClassName="active">
          {language === "EN" ? "SERVICES" : "SERVICIOS"}
        </NavLink>
        <NavLink className="menu-item" to="/career" activeClassName="active">
          {language === "EN" ? "CAREER" : "TRAYECTORIA"}
        </NavLink>
        <NavLink className="menu-item" to="/about" activeClassName="active">
          {language === "EN" ? "ABOUT" : "ACERCA"}
        </NavLink>
        <NavLink className="menu-item" to="/gallery" activeClassName="active">
          {language === "EN" ? "GALLERY" : "GALERÍA"}
        </NavLink>
        <NavLink className="menu-item" to="/contact" activeClassName="active">
          {language === "EN" ? "CONTACT" : "CONTACTO"}
        </NavLink>
      </div>
      <div className="language-toggle">
        <button
          className={language === "EN" ? "active-language" : "off"}
          onClick={() => toggleLanguage("EN")}
        >
          <span>E</span>
          <span>N</span>
        </button>
        <span className="separator"></span>
        <button
          className={language === "ES" ? "active-language" : "off"}
          onClick={() => toggleLanguage("ES")}
        >
          <span>E</span>
          <span>S</span>
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default Navbar;
