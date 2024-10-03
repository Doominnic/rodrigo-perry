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
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight - 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-menu">
        <div className="menu-mobile-icon" onClick={handleMenuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={!menuOpen ? "hamburguer-icon" : "icon-off"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={menuOpen ? "close-icon" : "icon-off"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          className={`hide-mobile ${
            menuOpen ? "mobile-menu open" : "hide-mobile-menu"
          }`}
          onClick={handleMenuOpen}
        >
          <NavLink
            className="mobile-item"
            to="/services"
            activeClassName="active"
          >
            {language === "EN" ? "SERVICES" : "SERVICIOS"}
          </NavLink>
          <NavLink
            className="mobile-item"
            to="/career"
            activeClassName="active"
          >
            {language === "EN" ? "CAREER" : "TRAYECTORIA"}
          </NavLink>
          <NavLink className="mobile-item" to="/about" activeClassName="active">
            {language === "EN" ? "ABOUT" : "ACERCA"}
          </NavLink>
          <NavLink
            className="mobile-item"
            to="/gallery"
            activeClassName="active"
          >
            {language === "EN" ? "GALLERY" : "GALERÍA"}
          </NavLink>
          <NavLink
            className="mobile-item"
            to="/contact"
            activeClassName="active"
          >
            {language === "EN" ? "CONTACT" : "CONTACTO"}
          </NavLink>
          <NavLink to="/" className="mobile-menu-logo">
            RODRIGO PERRY
          </NavLink>
        </div>
        <div className="navbar-menu-list">
          {location.pathname !== "/" && (
            <NavLink
              to="/"
              className={`home-item ${isScrolled ? "home-item-scrolled" : ""}`}
            >
              <p>RODRIGO</p>
              <p>PERRY</p>
            </NavLink>
          )}
          <NavLink
            className="menu-item"
            to="/services"
            activeClassName="active"
          >
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
