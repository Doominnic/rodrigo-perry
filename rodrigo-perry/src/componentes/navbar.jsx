import { NavLink } from "react-router-dom";
import "./../App.css";
import PropTypes from "prop-types";

function Navbar({ language, setLanguage }) {
  // Function to toggle language
  const toggleLanguage = lang => {
    setLanguage(lang);
  };

  return (
    <div className="navbar">
      <div className="navbar-menu">
        <NavLink className="menu-item" to="/services" activeClassName="active">
          {language === "EN" ? "SERVICES" : "SERVICIOS"}
        </NavLink>
        <NavLink className="menu-item" to="/career" activeClassName="active">
          {language === "EN" ? "CAREER" : "CARRERA"}
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
