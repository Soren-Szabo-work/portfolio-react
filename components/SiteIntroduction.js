import { motion } from "framer-motion";

const curtainBlock = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.25,
      when: "afterChildren",
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

const SiteIntroduction = () => {
  return (
    <div className="intro-container">
      <motion.div
        className="intro-curtain"
        variants={curtainBlock}
        initial="initial"
        animate="animate"
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      ></motion.div>
    </div>
  );
};

export default SiteIntroduction;
