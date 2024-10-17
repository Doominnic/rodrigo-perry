import { useState } from "react";

function Services() {
  const [expandedSection, setExpandedSection] = useState(null); // No section is expanded initially

  const toggleExpand = index => {
    if (expandedSection === index) {
      setExpandedSection(null); // Collapse
    } else {
      setExpandedSection(index); // Expand the clicked section
    }
  };

  const backgroundImages = [
    "url('/public/chef-fotos/3.jpg')", // Replace with actual image URLs
    "url('/public/plates/plate-1.jpg')",
    "url('/public/chef-fotos/5.jpg')",
    "url('/public/restaurants/Luxury.jpg')",
    "url('/public/chef-fotos/6.jpg')",
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

  return (
    <div className="services-container">
      {[
        <>
          Consulting <br /> and Advisory
        </>,
        "Events",
        "Private Chef",
        <>
          Luxury Yachts <br /> and Villas
        </>,
        "Cooking Classes",
      ].map((title, index) => (
        <div
          key={index}
          className={`service-section ${
            expandedSection === index
              ? "expanded"
              : expandedSection === null
              ? "initial"
              : "contracted"
          }`}
          style={{
            backgroundImage: backgroundImages[index],
            backgroundSize: "cover", // Ensure background covers the entire section
            backgroundPosition: "center", // Center the background image
          }}
        >
          <h2>{title}</h2>
          <div className="icon-container" onClick={() => toggleExpand(index)}>
            {expandedSection === index ? (
              <ion-icon name="chevron-down-circle"></ion-icon>
            ) : (
              <ion-icon name="chevron-forward-circle"></ion-icon>
            )}
          </div>
          <div
            className={`service-content ${
              expandedSection === index ? "reveal-text" : "hide-text"
            }`}
          >
            <p>{serviceTexts[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
