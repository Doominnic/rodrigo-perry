import { useState } from "react";
import PropTypes from "prop-types";

const Services = ({ language }) => {
  const [expandedSection, setExpandedSection] = useState(null); // No section is expanded initially

  const toggleExpand = index => {
    if (expandedSection === index) {
      setExpandedSection(null); // Collapse
    } else {
      setExpandedSection(index); // Expand the clicked section
    }
  };

  const backgroundImages = [
    "url('/services/1.jpg')", // Replace with actual image URLs
    "url('/services/2.jpg')",
    "url('/services/7.jpg')",
    "url('/services/4.jpg')",
    "url('/services/5.jpg')",
  ];

  const titlesEnglish = [
    <>
      Consulting <br /> and Advisory
    </>,
    "Events",
    "Private Chef",
    <>
      Luxury Yachts <br /> and Villas
    </>,
    "Cooking Classes",
  ];

  const titlesSpanish = [
    <>
      Consultoría <br /> y Asesoría
    </>,
    "Eventos",
    "Chef Privado",
    <>
      Yates y Villas <br /> de Lujo
    </>,
    "Clases de Cocina",
  ];

  const serviceTexts = [
    <>
      These services are dedicated to bringing your culinary vision to life with
      a personal touch. Collaboratively, we’ll craft a menu that is not only
      unique but is also perfectly tailored to resonate with your brand and
      audience. Whether it’s developing innovative concepts, refining recipes,
      or creating seasonal menus, the goal is to ensure your offerings are
      always fresh and exciting. <br /> <br />
      Enhancing kitchen operations is another key focus. By evaluating your
      current workflows, the goal is to identify opportunities to streamline
      processes, reduce waste, and boost productivity. Staff training is
      provided to maintain high standards of preparation and presentation, while
      advicing on selecting and maintaining kitchen equipment to achieve peak
      performance. <br /> <br />
      On the business side, staying updated with culinary trends and offering
      solutions to operational challenges, as well as a market analysis will
      help position your business effectively. By providing guidance on
      budgeting and pricing, support for elevating culinary skills, creating
      memorable dining experiences, and designing custom event menus that
      reflect your vision, we will work towards making your culinary endeavors
      remain both innovative and successful.
    </>,
    `When it comes to hosting private events,  I offer a variety of services to guarantee everything runs seamlessly. From designing personalized menus that cater to your event’s theme and your guests’ preferences to managing culinary aspects such as timing, presentation, and service, I am dedicated to making your event a success. I will select high-quality ingredients to elevate the flavors of your dishes, manage staff for smooth operations, and design visually impressive food displays. After the event, I will review the outcome and collect feedback to refine and improve future events.
`,
    `As your personal chef, I am dedicated to providing a customized and exceptional dining experience. I will develop menus tailored specifically to your tastes and dietary needs, prepare gourmet meals using the finest ingredients, and design bespoke dining experiences for your private gatherings. By overseeing all aspects of kitchen operations, including cooking, cleaning, and equipment maintenance, to providing exceptional service and presentation, my aim is to elevate your dining experience. Adaptability is crucial, and I will adjust to your changing schedules and preferences to offer a seamless culinary experience.`,
    `For those special occasions on luxury yachts or villas, I offer a personalized approach to dining. I will design custom menus that incorporate contemporary trends and your individual tastes, making every meal a memorable occasion. I will manage every detail of meal preparation with the highest standards, organizing and maintaining the kitchen, and accommodating any last-minute requests or changes. I am committed to creating beautifully presented dishes and providing exceptional service, whether it’s for a relaxed breakfast or an elaborate dinner.
`,
    `Experience the joy of cooking with personalized classes designed to suit various skill levels and interests. I offer hands-on instruction in cooking techniques, recipe development, and ingredient selection, creating an interactive and engaging learning environment. Whether you're looking to master basic skills or explore advanced techniques, my classes are designed to improve your culinary abilities. I also offer personalized feedback and can arrange group classes or private sessions for special events or team-building activities.
`,
  ];

  const serviceTextsSpanish = [
    <>
      Los servicios de consultoría y asesoría están dedicados a hacer realidad
      tu visión culinaria con un toque personal. Juntos, elaboraremos un menú
      que no solo sea único, sino que también sea perfectamente creado para
      resonar con tu marca y tu audiencia. Ya sea desarrollando conceptos
      innovadores, perfeccionando recetas o creando menús de temporada, el
      objetivo es garantizar que tus ofertas siempre sean frescas y
      emocionantes. <br /> <br />
      Mejorar las operaciones de cocina es otro enfoque importante. Al evaluar
      tus flujos de trabajo actuales, se identificarán oportunidades para
      agilizar procesos, reducir desperdicios y aumentar la productividad. Se
      proporcionará formación al personal para mantener altos estándares de
      preparación y presentación, además de orientación en la selección y el
      mantenimiento de equipos de cocina para alcanzar un funcionamiento óptimo.{" "}
      <br /> <br />
      En el ámbito empresarial, estar al día con las tendencias culinarias y
      ofrecer soluciones a retos operacionales, además de un estudio de mercado
      va a impulsar el posicionamiento de tu negocio de manera efectiva.
      Brindando una guía en presupuestos y precios, apoyo para elevar las
      habilidades culinarias, crear experiencias gastronómicas memorables y
      diseñar menús personalizados para eventos que reflejen tu visión,
      trabajaremos para que tus iniciativas culinarias se mantengan tanto
      innovadoras como exitosas.
    </>,
    `Cuando se trata de organizar eventos privados, ofrezco una variedad de servicios para garantizar que todo transcurra sin problemas. Desde el diseño de menús personalizados que se adapten a la temática de tu evento y a las preferencias de tus invitados, hasta la gestión de aspectos culinarios como la sincronización, la presentación y el servicio, estoy aquí para asegurarme de que tu evento sea un éxito. Seleccionaré ingredientes de alta calidad para realzar los sabores de tus platos, gestionaré al personal para asegurar operaciones eficientes y crearé presentaciones de alimentos visualmente impactantes. Después del evento, revisaré y recogeré comentarios para ayudar a mejorar futuros eventos.
`,
    `Como tu chef personal, estoy dedicado a proporcionar una experiencia gastronómica personalizada y excepcional. Desarrollaré menús adaptados específicamente a tus gustos y necesidades dietéticas o nutricionales, prepararé comidas gourmet utilizando los mejores ingredientes y diseñaré experiencias gastronómicas a medida para tus reuniones privadas. Al gestionar todos los aspectos de la operación de la cocina, incluyendo la cocción, la limpieza y el mantenimiento del equipo, hasta asegurar un servicio y presentación sobresalientes, mi objetivo es mejorar tu experiencia gastronómica en general. La flexibilidad es crucial, y me adaptaré a tus horarios y preferencias cambiantes para proporcionar una experiencia culinaria sin inconvenientes.`,
    `Para esos momentos especiales a bordo de yates o en villas de lujo, ofrezco un enfoque culinario altamente personalizado. Diseñaré menús a la medida que reflejen las tendencias contemporáneas y tus preferencias personales, asegurando que cada comida sea una experiencia única. Gestionaré de forma meticulosa cada aspecto de la preparación de las comidas con los más altos estándares, la organización y el mantenimiento riguroso de la cocina, y la adaptación a cualquier solicitud o cambio de última hora. Estoy comprometido a crear platos perfectamente presentados y a ofrecer un servicio excepcional, ya sea para un desayuno tranquilo o una cena sofisticada.
`,
    `Experimenta la alegría de cocinar con clases personalizadas diseñadas para adaptarse a diversos niveles de habilidad e intereses. Ofrezco instrucción práctica en técnicas de cocina, desarrollo de recetas y selección de ingredientes, creando un ambiente de aprendizaje interactivo y envolvente. Ya sea que estés interesado en habilidades básicas o técnicas avanzadas, mis clases están diseñadas para mejorar tus habilidades culinarias. También proporciono retroalimentación personalizada y organizo clases grupales o sesiones privadas para ocasiones especiales o actividades de trabajo en equipo.
`,
  ];

  const titles = language === "EN" ? titlesEnglish : titlesSpanish;

  return (
    <div className="services-container">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`service-section ${
            expandedSection === index
              ? "expanded"
              : expandedSection === null
              ? "initial"
              : "contracted"
          }`}
          onClick={() => toggleExpand(index)}
        >
          <div
            className="background-image"
            style={{
              backgroundImage: backgroundImages[index],
            }}
          ></div>
          <h2>{title}</h2>

          <div
            className={`service-content ${
              expandedSection === index ? "reveal-text" : "hide-text"
            }`}
          >
            {language === "EN" ? (
              <p>{serviceTexts[index]}</p>
            ) : (
              <p>{serviceTextsSpanish[index]}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Services.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Services;
