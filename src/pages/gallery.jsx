import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const pageVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const Gallery = ({ language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = src => {
    setSelectedImage(src);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = ""; // Restore background scroll
  };

  // Array of image URLs
  const imageFilenames = [
    "image-1.jpeg",
    "image-2.jpeg",
    "image-3.jpeg",
    "image-4.jpeg",
    "image-5.jpeg",
    "image-6.jpeg",
    "image-7.jpeg",
    "image-8.jpeg",
    "image-9.jpeg",
    "image-10.jpeg",
    "image-11.jpeg",
    "image-12.jpeg",
    "image-13.jpeg",
    "image-14.JPG",
    "image-15.JPG",
    "image-16.jpg",
    "image-17.JPG",
    "image-18.jpg",
    "image-19.jpg",
    "image-20.JPG",
    "image-21.JPG",
    "image-22.jpeg",
    "image-23.jpg",
    "image-24.jpeg",
    "image-25.jpeg",
    "image-26.jpeg",
    "image-27.jpeg",
    "image-28.JPG",
    "image-29.jpeg",
    "image-30.JPG",
    "image-31.jpeg",
    "image-32.jpeg",
    "image-33.jpeg",
    "image-35.jpeg",
    "image-37.jpeg",
    "image-38.jpeg",
    "image-39.jpeg",
    "image-40.jpeg",
    "image-41.jpeg",
    "image-42.jpeg",
    "image-43.jpeg",
    "image-44.jpeg",
    "image-45.jpeg",
    "image-46.jpeg",
    "image-47.jpeg",
    "image-48.jpeg",
    "image-49.jpeg",
    "image-50.jpeg",
    "image-51.jpeg",
    "image-52.jpeg",
    "image-53.JPG",
    "image-54.jpeg",
    "image-55.jpeg",
    "image-56.jpg",
    "image-57.jpeg",
    "image-58.jpeg",
    "image-59.jpeg",
    "image-60.jpeg",
    "image-61.jpeg",
  ];

  const images = imageFilenames.map(filename => `/gallery/${filename}`);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.2 }}
    >
      <div className="gallery-page">
        <div className="gallery-section-1">
          <img src="plates/8.jpg" className="gallery-section-background" />
          <div className="gallery-title">
            <h1>RODRIGO</h1>
            <h1>PERRY</h1>
          </div>
          <div className="view-gallery">
            <p className={language === "EN" ? "text-display" : "text-hide"}>
              Gallery
            </p>
            <p className={language === "ES" ? "text-display" : "text-hide"}>
              Galería
            </p>
            <a href="#gallery-section">
              <img src="icons/flechita.png" alt="Scroll Down" />
            </a>
          </div>
        </div>

        <div className="mosaic-gallery" id="gallery-section">
          {images.map((src, index) => (
            <div
              className="image-container"
              key={index}
              onClick={() => openModal(src)}
            >
              <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <footer>
          <h2>Let’s cook</h2>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/perryrodrigo/"
              className="contact-info"
            >
              <div className="ig-icon icon"></div>perryrodrigo
            </a>
            <a href="mailto:perryrodrigo@gmail.com" className="contact-info">
              <div className="email-icon icon"></div>perryrodrigo@gmail.com
            </a>
            <a href="tel:+573134052801" className="contact-info">
              <div className="tel-icon icon"></div>+57 3134052801
            </a>
          </div>
        </footer>

        {isModalOpen && (
          <div
            className="modal"
            style={{ top: scrollPosition }}
            onClick={closeModal}
          >
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

Gallery.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Gallery;
