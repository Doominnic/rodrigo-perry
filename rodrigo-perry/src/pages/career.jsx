import { useState } from "react";
import PropTypes from "prop-types";

const Career = ({ language }) => {
  const [restaurant, setRestaurant] = useState("celler");

  const toggleRestaurant = rest => {
    setRestaurant(rest);
  };

  return (
    <>
      <div className="career-page">
        <div
          className={`restaurant el-celler ${
            restaurant === "celler" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <img className="celler-logo" src="logos/logo1.png" />
            <h2>RESTAURANT</h2>
            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Founded in 1986, this prestigious three Michelin Star restaurant
                is helmed by the renowned Roca brothers: Joan, the head chef;
                Josep, the sommelier; and Jordi, the pastry chef.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Specializing in traditional Catalan cuisine, the restaurant
                earned global acclaim by being named the best in the world in
                the {`"`}
                The World{`'`}s 50 Best Restaurants{`"`} list by Restaurant
                magazine in both 2013 and 2015. Responsible for menu service and
                preparation, mise en place, organization of supplies, and
                maintaining cleanliness in the areas and all the equipment.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Cook</p>
              <div className="divider"></div>
              <p>Girona, Spain</p>
            </div>
          </div>
        </div>
        <div
          className={`restaurant juana-la-loca" {restaurant === "juana" ? "restaurant-show" : ""}`}
        ></div>
        <div
          className={`restaurant luxury" {restaurant === "luxury" ? "restaurant-show" : ""}`}
        ></div>
        <div
          className={`restaurant monasterio" {restaurant === "monasterio" ? "restaurant-show" : ""}`}
        ></div>
        <div
          className={`restaurant moo" {restaurant === "moo" ? "restaurant-show" : ""}`}
        ></div>
        <div
          className={`restaurant primario" {restaurant === "primario" ? "restaurant-show" : ""}`}
        ></div>
      </div>
      <div className="career-navbar">
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("celler")}
        ></div>
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("juana")}
        ></div>
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("luxury")}
        ></div>
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("monasterio")}
        ></div>
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("moo")}
        ></div>
        <div
          className="career-navbar-item"
          onClick={() => toggleRestaurant("primario")}
        ></div>
      </div>
    </>
  );
};

Career.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Career;
