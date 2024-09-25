import { useState } from "react";
import PropTypes from "prop-types";

const Career = ({ language }) => {
  const [restaurant, setRestaurant] = useState("primario");

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
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Fundado en 1986, este prestigioso restaurante con tres estrellas
                Michelin está dirigido por los renombrados hermanos Roca: Joan,
                el chef principal; Josep, el sommelier; y Jordi, el chef de
                repostería.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Especializado en la cocina tradicional catalana, el restaurante
                alcanzó fama mundial al ser nombrado el mejor del mundo en la
                lista de “Los 50 Mejores Restaurantes del Mundo” de la revista
                Restaurant en 2013 y 2015. Responsable del servicio y
                preparación del menú, mise en place, organización de suministros
                y mantenimiento de la limpieza en las áreas y todo el equipo.
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
                Active participant in the restaurant opening and Chef
                responsible for kitchen management, supplier relations, menu
                creation, mise en place preparation, service, and company
                catering.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                El proyecto inaugural del renombrado grupo español Tragaluz en
                Colombia, Juana la Loca, ofrece una cocina mediterránea con
                especialidades como paella, cochinillo, pescados y ensaladas
                frescas.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                La distintiva decoración, diseño y arquitectura del restaurante
                fueron creados por el aclamado diseñador y arquitecto Isay
                Weinfeld, lo que le valió a Juana la Loca el premio Wallpaper
                Design Award al Mejor Restaurante en 2016.
                <br /> <br />
                Participante activo en la apertura del restaurante y Chef
                responsable de la gestión de la cocina, relaciones con
                proveedores, creación de menús, preparación de mise en place,
                servicio y catering de la empresa.
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
                preferences, ensuring exceptional service within the yacht
                {`'`}s elegant and intimate setting. This expertise has been
                showcased across various regions in Europe and the Caribbean,
                turning each meal into a memorable highlight of the voyage with
                a focus on both impeccable presentation and exceptional taste.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Como chef privado en yates de lujo, se crean experiencias
                gastronómicas personalizadas para una clientela exclusiva. Se
                diseñan menús exquisitos y personalizados, que reflejan los más
                altos estándares de arte culinario, utilizando solo los mejores
                ingredientes.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Las comidas gourmet se preparan con meticulosa atención a las
                preferencias de los invitados, garantizando un servicio
                excepcional en el entorno elegante e íntimo del yate. Esta
                experiencia ha sido demostrada en diversas regiones de Europa y
                el Caribe, convirtiendo cada comida en un momento memorable del
                viaje, con un enfoque en una presentación impecable y un sabor
                excepcional.
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
                <br /> <br /> In charge of menu development, restaurant service,
                supplier relationships, administrative tasks, employees training
                and team recruitment for the hotel.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Hotel boutique ubicado en una isla remota del océano Caribe,
                destacado por ofrecer una experiencia de lujo mezclada con la
                cultura local de la isla. El proyecto atrajo a turistas de alto
                perfil de todo el mundo, interesados en una experiencia
                auténtica, pero consciente y lujosa.
                <br /> <br />
                El hotel fue elogiado en destacadas publicaciones
                internacionales como Condé Nast, Financial Times: How to Spend,
                Vogue y GQ, entre otras.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Encargado de la creación de experiencias gastronómicas y del
                desarrollo del menú basado en calendarios estacionales y vedas
                de pesca, trabajando directamente con pescadores y agricultores
                artesanales de la isla. Responsable de la planificación,
                capacitación y gestión de los empleados del hotel.
                <br /> <br /> También responsable del desarrollo de menús,
                servicio de restaurante, relaciones con proveedores, tareas
                administrativas, capacitación de empleados y reclutamiento de
                equipo para el hotel.
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
                Isla Providencia - Caribe Colombiano
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
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Los renombrados hermanos Roca, detrás del prestigioso Celler de
                Can Roca en Girona, han llevado su experiencia culinaria a
                Barcelona con el Restaurante Moo.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Ubicado dentro del hotel más exclusivo de la ciudad, el Hotel
                Omm, Moo ofrece una cocina de autor galardonada con estrellas
                Michelin y vinos excepcionales, todo en un ambiente lujoso y
                sofisticado.
                <br /> <br />
                Responsable del servicio y preparación del menú, mise en place,
                organización de suministros y mantenimiento de la limpieza en
                las áreas y en todo el equipo.
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
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Negocio enfocado en la producción de caldo de huesos orgánico
                para uso culinario y terapéutico. <br /> <br />
                El proyecto se sustenta en los pilares de la sostenibilidad,
                productos orgánicos de origen local, trazabilidad de los
                insumos, y la creación de productos de la más alta calidad que
                contribuyen a la salud de quienes los consumen.
              </p>
              <p className={language === "ES" ? "text-display" : "text-hide"}>
                Primario nace de la búsqueda de opciones alimentarias naturales
                que potencien las capacidades regenerativas del cuerpo, al mismo
                tiempo que elevan el sabor de las creaciones culinarias. <br />{" "}
                <br />
                Para más información: @1primario <br /> <br /> Encargado del
                desarrollo de productos, producción, relaciones con proveedores,
                tareas administrativas, ventas, capacitación de empleados y
                reclutamiento de equipo para la empresa.
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
                Negocio Propio
              </p>
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
    </>
  );
};

Career.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Career;
