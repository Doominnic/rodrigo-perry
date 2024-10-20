import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const Contact = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.2 }}
    >
      <div className="contact-page">
        <div className="contact-box-1">
          <h1>RODRIGO</h1>
          <h1>PERRY</h1>
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
        <div className="contact-box-2">
          <p>Let’s cook</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
