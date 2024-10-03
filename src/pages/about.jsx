import PropTypes from "prop-types";

const About = ({ language }) => {
  const handleScroll = e => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute("href"));
    const offsetPosition = target.offsetTop - 80; // 60px ahead

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="about-page">
      <div className="section-1">
        <p className={language === "EN" ? "text-display-about" : "text-hide"}>
          With an impressive 20-year culinary career, Rodrigo, a Colombian and
          Portuguese national,{" "}
          <b>
            has refined his expertise in some of the world’s most vibrant food
            cultures, including Colombia, Argentina, and various European
            countries
          </b>{" "}
          such as Spain, Italy, France, and Portugal, as well as the Caribbean.
        </p>
        <p className={language === "ES" ? "text-display-about" : "text-hide"}>
          Con una extensa carrera culinaria de 20 años, Rodrigo, de nacionalidad
          colombiana y portuguesa,
          <b>
            ha perfeccionado su experiencia en algunas de las culturas
            gastronómicas más vibrantes del mundo incluyendo Colombia, Argentina
            y varios países europeos
          </b>{" "}
          como España, Italia, Francia y Portugal, así como en el Caribe.
        </p>
      </div>
      <div className="read-more">
        <p>Read More</p>
        <a href="#section-1" onClick={handleScroll}>
          <img src="icons/flechita.png" />
        </a>
      </div>
      <div className="section-2">
        <div className="sub-section-1" id="section-1">
          <p
            className={
              language === "EN" ? "text-display-section-2" : "text-hide"
            }
          >
            <b>
              His extensive background spans prestigious restaurants, luxury
              hotels, and, more recently, high-end sailing yachts,
            </b>{" "}
            where he masterfully creates dishes that are as visually stunning as
            they are delicious.
          </p>
          <p
            className={
              language === "ES" ? "text-display-section-2" : "text-hide"
            }
          >
            <b>
              Su amplia trayectoria abarca restaurantes de prestigio, hoteles de
              lujo y más recientemente, yates de alta gama
            </b>{" "}
            donde crea magistralmente platos que son tanto visualmente
            atractivos como deliciosos.
          </p>
          <div className="chef-image-about"></div>
        </div>
        <div className="plate-1"></div>
      </div>
      <div className="section-3">
        <div className="plate-2-container">
          <div className="plate-2"></div>
        </div>
        <div className="sub-section-2">
          <p
            className={
              language === "EN" ? "text-display-section-3" : "text-hide"
            }
          >
            In addition to his culinary work, Rodrigo offers consulting
            services, leveraging his experience to optimize kitchen operations
            and enhance culinary strategies infusing creativity and meticulous
            attention to detail into every project.
          </p>
          <p
            className={
              language === "EN" ? "text-display-section-3" : "text-hide"
            }
          >
            <b>
              As a passionate advocate for sustainable and responsible food
              practices, he carefully chooses his providers and ingredients,
            </b>{" "}
            as well as his partners and the environmental impact they may have.
            His experience in the fast-paced culinary world, has sharpened his
            ability to thrive under pressure, tackle new challenges, and lead
            teams in delivering outstanding experiences.
          </p>
          <p
            className={
              language === "ES" ? "text-display-section-3" : "text-hide"
            }
          >
            Además de su trabajo culinario, Rodrigo ofrece servicios de
            consultoría aprovechando su vasta experiencia para optimizar las
            operaciones de cocina y mejorar las estrategias culinarias,
            transmitiendo creatividad y meticulosa atención al detalle en cada
            proyecto.
          </p>
          <p
            className={
              language === "ES" ? "text-display-section-3" : "text-hide"
            }
          >
            <b>
              Como un apasionado de las prácticas alimentarias sostenibles y
              responsables, elige cuidadosamente a sus proveedores e
              ingredientes,
            </b>{" "}
            así como a sus socios y el impacto ambiental que puedan tener. Su
            experiencia en el acelerado mundo culinario ha potenciado su
            capacidad para desempeñarse bajo presión, enfrentar nuevos desafíos
            rápidamente y liderar equipos en la entrega de experiencias
            excepcionales.
          </p>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default About;
