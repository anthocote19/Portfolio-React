import "./WorkCardStyles.css";
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard.js";
import WorkCradData from "./WorkCradData.js";

const Work = () => {
  return (
    <motion.div
      className="work-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="project-heading"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        Voici un aperçu de mes projets personnels...
      </motion.h1>

      <div className="project-container">
        {WorkCradData.map((val, ind) => (
          <motion.div
            key={ind}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * ind }}
          >
            <WorkCard
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              consulter={val.view}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
