import "./../App.css";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.2 }}
    >
      <div className="home-page">
        <h1>RODRIGO</h1>
        <h1>PERRY</h1>
      </div>
    </motion.div>
  );
};

export default Home;
