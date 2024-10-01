import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Career = ({ language }) => {
  const [restaurant, setRestaurant] = useState("primario");
  const isMobile = useIsMobile();

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

            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Founded in 1986, this prestigious three Michelin Star restaurant
                is helmed by the renowned Roca brothers: Joan, the head chef;
                Josep, the sommelier; and Jordi, the pastry chef. Specializing
                in traditional Catalan cuisine, the restaurant earned global
                acclaim by being named the best in the world in the “The World’s
                50 Best Restaurants” list by Restaurant magazine in both 2013
                and 2015.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                In charge of the service and menu preparation, mise en place,
                organization of supplies, and maintaining cleanliness in the
                areas and all the equipment.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Fundado en 1986, este prestigioso restaurante con tres estrellas
                Michelin es dirigido por los reconocidos hermanos Roca: Joan,
                chef principal; Josep, sumiller; y Jordi, chef de pastelería.
                Especializado en cocina tradicional catalana, el restaurante ha
                ganado reconocimiento mundial al ser nombrado el mejor del mundo
                en la lista {`"`}The World’s 50 Best Restaurants{`"`} de la
                revista Restaurant en 2013 y 2015.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Responsable del servicio y preparación del menú, mise en place,
                organización de suministros y conservación de la limpieza en las
                áreas de cocina y los equipos.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Cook
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Cocinero
              </p>
              <div className="divider"></div>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Girona, Spain
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Girona, España
              </p>
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
                For the opening process, responsible for recipe costing,
                selection and training of staff, equipment purchasing, and menu
                creation. Subsequently, chef in charge of kitchen management,
                supplier relations, mise en place preparation, and external
                catering.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                El proyecto inaugural del renombrado grupo español Tragaluz en
                Colombia, Juana la Loca, ofreció una cocina mediterránea con
                especialidades como paella, cochinillo, pescado y ensaladas
                frescas.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                La decoración, diseño y arquitectura distintivos del restaurante
                fueron elaborados por el aclamado diseñador y arquitecto Isay
                Weinfeld, lo que le valió a Juana la Loca el Wallpaper* Design
                Award al Mejor Restaurante en 2016.
                <br /> <br />
                Para el proceso de apertura, encargado del costeo de recetas,
                selección y entrenamiento de personal, compra de equipos y
                creación de menú. Posteriormente, chef responsable de la gestión
                de la cocina, relaciones con proveedores, preparación de mise en
                place y catering externo.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Executive Chef
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Chef Ejecutivo
              </p>
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

            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                As a private chef on luxury yachts, bespoke dining experiences
                are crafted for an exclusive clientele. Exquisite, personalized
                menus are created, reflecting the highest standards of culinary
                artistry and using only the finest ingredients.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Gourmet meals are prepared with meticulous attention to guests
                {`'`}
                preferences, ensuring exceptional service with a focus on both
                impeccable presentation and taste.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Como chef privado en yates de lujo, las experiencias
                gastronómicas son totalmente personalizadas y hechas para
                clientes exclusivos. Se elaboran menús únicos que reflejan los
                más altos estándares de la gastronomía, utilizando solo los
                mejores ingredientes.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Las comidas se preparan con atención meticulosa a las
                preferencias de los huéspedes, asegurando un servicio
                excepcional con un enfoque tanto en la presentación impecable
                como en el sabor excepcional.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Private Chef
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Chef Privado
              </p>
              <div className="divider"></div>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Europe - Caribbean
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Europa - Caribe
              </p>
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
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Hotel boutique ubicado en una isla remota del Caribe el cual se
                destacó por ofrecer una experiencia de lujo combinada con la
                cultura local de la isla. El proyecto atrajo a turistas de alto
                perfil de todo el mundo, interesados en una experiencia
                auténtica, consciente y de lujo.
                <br /> <br />
                El hotel recibió reconocimientos en importantes publicaciones
                internacionales como Conde Nast, Financial Times: How to Spend,
                Vogue y GQ, entre otras.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Encargado de la creación de experiencias gastronómicas,
                desarrollo del menú basado en calendarios de temporada y cierres
                de pesca; trabajando directamente con pescadores y agricultores
                artesanales de la isla. Planificación, capacitación y gestión
                del equipo del hotel.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Co-Creator and Executive Chef
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Co-Creador y Chef Ejecutivo
              </p>
              <div className="divider"></div>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Old Providence Island - Colombian Caribbean
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Isla de Providencia - Caribe Colombiano
              </p>
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

            <div className="restaurant-description">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                The renowned Roca brothers, behind the prestigious Celler de Can
                Roca in Girona, brought their culinary expertise to Barcelona
                with Moo Restaurant. Located within the city’s most exclusive
                hotel, Hotel Omm, Moo offers Michelin-starred signature cuisine
                and exceptional wines, all within a luxurious and sophisticated
                setting.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Responsible for menu service and preparation, mise en place,
                organization of supplies, and maintaining cleanliness in the
                areas and all the equipment.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Los reconocidos hermanos Roca, detrás del prestigioso Celler de
                Can Roca en Girona, llevaron su maestría culinaria a Barcelona
                con el restaurante Moo. Ubicado dentro del exclusivo Hotel Omm,
                Moo ofrece cocina de autor con estrella Michelin y vinos
                excepcionales, todo en un entorno lujoso y sofisticado.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Responsable del servicio y preparación del menú, mise en place,
                organización de suministros y conservación de la limpieza en las
                áreas de cocina y los equipos.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Cook
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Cocinero
              </p>
              <div className="divider"></div>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Barcelona, Spain
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Barcelona, España
              </p>
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
                Based on the principles of sustainability, traceability of
                supplies, and the use of organic products to support local
                economies, Primario offers products of the highest quality that
                contribute to the health and well-being of those who consume
                them, while also enhancing the flavor of culinary preparations.
              </p>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                For more information:{" "}
                <a href="https://www.instagram.com/1primario/">@1primario</a>{" "}
                <br /> <br /> In charge of product development, production,
                supplier relationships, administrative tasks, sales, employees
                training and team recruitment for the company.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Empresa enfocada en la producción de caldos de huesos orgánicos
                para uso culinario y terapéutico. <br /> <br />
                Basada en los principios de sostenibilidad, trazabilidad de
                insumos y el uso productos orgánicos para el apoyo de economías
                locales, Primario ofrece productos de la más alta calidad que
                contribuyen a la salud y el bienestar de quienes los consumen,
                al mismo tiempo que eleva el sabor de las preparaciones
                gastronómicas.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Para más información: @1primario <br /> <br /> Encargado del
                desarrollo de productos, producción, relaciones con proveedores,
                ventas, capacitación de empleados y reclutamiento de equipos
                para la empresa.
              </p>
            </div>
            <div className="restaurant-location">
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Personal Project
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Proyecto Personal
              </p>
              <div className="divider"></div>
              <p className={language === "EN" ? "text-display" : "text-hide"}>
                Owned Business
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Emprendimiento
              </p>
              <div className="divider"></div>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Slider for Career Navbar */}
      {isMobile ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          onSlideChange={swiper => {
            const activeSlide = swiper.activeIndex;
            const restaurantNames = [
              "primario",
              "luxury",
              "monasterio",
              "juana",
              "celler",
              "moo",
            ];
            toggleRestaurant(restaurantNames[activeSlide]);
          }}
        >
          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "primario" ? "restaurant-highlight" : ""
              }`}
            >
              <img className="navbar-logos" src="logos/Logo2.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "luxury" ? "restaurant-highlight" : ""
              }`}
            >
              <h1>LUXURY YATCHS</h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "monasterio" ? "restaurant-highlight" : ""
              }`}
            >
              <img className="navbar-logos" src="logos/Logo3.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "juana" ? "restaurant-highlight" : ""
              }`}
            >
              <img className="navbar-logos" src="logos/logo4.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "celler" ? "restaurant-highlight" : ""
              }`}
            >
              <img
                className="navbar-logos celler-slider"
                src="logos/logo1.png"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`career-navbar-item ${
                restaurant === "moo" ? "restaurant-highlight" : ""
              }`}
            >
              <h1>MOO RESTAURANT</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
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
              restaurant === "luxury" ? "restaurant-highlight" : ""
            }`}
            onClick={() => toggleRestaurant("luxury")}
          >
            <h1>LUXURY YATCHS</h1>
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
              restaurant === "juana" ? "restaurant-highlight" : ""
            }`}
            onClick={() => toggleRestaurant("juana")}
          >
            <img className="navbar-logos" src="logos/logo4.png" />
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
            className={`career-navbar-item ${
              restaurant === "moo" ? "restaurant-highlight" : ""
            }`}
            onClick={() => toggleRestaurant("moo")}
          >
            <h1>MOO RESTAURANT</h1>
          </div>
        </div>
      )}
    </>
  );
};

Career.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Career;
