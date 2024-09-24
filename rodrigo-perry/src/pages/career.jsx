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
          className={`restaurant juana-la-loca ${
            restaurant === "juana" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <img className="juana-logo" src="logos/logo4.png" />
            <h2>RESTAURANT</h2>
            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                The inaugural project of the renowned Spanish group Tragaluz in
                Colombia, Juana la Loca, offers a Mediterranean cuisine
                featuring highlights such as paella, suckling pig, fish, and
                fresh salads.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                The restaurant{`'`}s distinctive décor, design, and architecture
                were crafted by acclaimed designer and architect Isay Weinfeld,
                earning Juana la Loca the Wallpaper* Design Award for Best
                Restaurant in 2016.
                <br /> <br />
                Active participant in the restaurant opening and Chef
                responsible for kitchen management, supplier relations, menu
                creation, mise en place preparation, service, and company
                catering.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Executive Chef</p>
              <div className="divider"></div>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
        <div
          className={`restaurant luxury ${
            restaurant === "luxury" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <h1>LUXURY YACHTS</h1>
            <h2>RESTAURANT</h2>
            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                As a private chef on luxury yachts, bespoke dining experiences
                are crafted for an exclusive clientele. Exquisite, personalized
                menus are created, reflecting the highest standards of culinary
                artistry and using only the finest ingredients.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Gourmet meals are prepared with meticulous attention to guests
                preferences, ensuring exceptional service within the yacht
                {`'`}s elegant and intimate setting. This expertise has been
                showcased across various regions in Europe and the Caribbean,
                turning each meal into a memorable highlight of the voyage with
                a focus on both impeccable presentation and exceptional taste.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Private Chef</p>
              <div className="divider"></div>
              <p>Europe - Caribbean</p>
            </div>
          </div>
        </div>
        <div
          className={`restaurant monasterio ${
            restaurant === "monasterio" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <img className="monasterio-logo" src="logos/Logo3.png" />
            <h2 className="monasterio-h2">HOTEL</h2>
            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Boutique hotel located on a remote island in the Caribbean Ocean
                which stood out for offering a luxury experience mixed with the
                local culture of the island. The project attracted high profile
                tourists from all around the world, who were interested in a
                real, yet conscious and luxurious experience.
                <br /> <br />
                The hotel was praised in leading international publications such
                as Conde Nast, Financial Times: How to Spend, Vogue, and GQ
                among others.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                In charge of the creation of gastronomic experiences,
                development of the menu based on seasonal calendars and fishing
                closures; working directly with artisan fishermen and farmers
                from around the island. Planning, training, and management of
                the hotel employees.
                <br /> <br /> In charge of menu development, restaurant service,
                supplier relationships, administrative tasks, employees training
                and team recruitment for the hotel.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Co-Creator and Executive Chef</p>
              <div className="divider"></div>
              <p>Old Providence Island - Colombian Caribbean</p>
            </div>
          </div>
        </div>
        <div
          className={`restaurant moo ${
            restaurant === "moo" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <h1>MOO RESTAURANT</h1>
            <h2>HOTEL OMM</h2>
            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                The renowned Roca brothers, behind the prestigious Celler de Can
                Roca in Girona, have brought their culinary expertise to
                Barcelona with Moo Restaurant.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Located within the city’s most exclusive hotel, Hotel Omm, Moo
                offers Michelin-starred signature cuisine and exceptional wines,
                all within a luxurious and sophisticated setting.
                <br /> <br />
                Responsible for menu service and preparation, mise en place,
                organization of supplies, and maintaining cleanliness in the
                areas and all the equipment.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Cook</p>
              <div className="divider"></div>
              <p>Barcelona, Spain</p>
            </div>
          </div>
        </div>
        <div
          className={`restaurant primario ${
            restaurant === "primario" ? "restaurant-show" : ""
          }`}
        >
          <div className="filter-container">
            <img className="primario-logo" src="logos/Logo2.png" />

            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Business focused on the production of organic bone broth for
                culinary and therapeutic use. <br /> <br />
                The project is sustained by the pillars of sustainability,
                locally sourced organic produce, traceability of inputs, and the
                creation of top quality products that contribute to the health
                of those who consume it.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Primario originates from the pursuit of natural food options
                that enhance the body’s regenerative powers while also elevating
                the flavor of culinary creations. <br /> <br />
                For more information: @1primario <br /> <br /> In charge of
                product development, production, supplier relationships,
                administrative tasks, sales, employees training and team
                recruitment for the company.
              </p>
            </div>
            <div className="restaurant-location">
              <p>Personal Project</p>
              <div className="divider"></div>
              <p>Owned Business</p>
              <div className="divider"></div>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="career-navbar">
        <div
          className={`career-navbar-item  ${
            restaurant === "primario" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("primario")}
        >
          <img className="navbar-logos" src="logos/Logo2.png" />
        </div>
        <div
          className={`career-navbar-item ${
            restaurant === "celler" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("celler")}
        >
          <img
            className="navbar-logos celler-logo-navbar"
            src="logos/logo1.png"
          />
        </div>
        <div
          className={`career-navbar-item luxury-navbar ${
            restaurant === "monasterio" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("monasterio")}
        >
          <img className="navbar-logos" src="logos/Logo3.png" />
        </div>
        <div
          className={`career-navbar-item ${
            restaurant === "luxury" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("luxury")}
        >
          <h1>LUXURY YATCH</h1>
        </div>
        <div
          className={`career-navbar-item ${
            restaurant === "juana" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("juana")}
        >
          <img className="navbar-logos" src="logos/logo4.png" />
        </div>
        <div
          className={`career-navbar-item ${
            restaurant === "moo" ? "restaurant-highlight" : ""
          }`}
          onClick={() => toggleRestaurant("moo")}
        >
          <h1>MOO RESTAURANT</h1>
        </div>
      </div>
    </>
  );
};

Career.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Career;
