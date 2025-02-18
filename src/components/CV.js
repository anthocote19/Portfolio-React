import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import "./CVStyles.css";

export default function CVUpload() {
  const cvFile = "/CV Anthony COTE - Word -PDF.pdf";
  const [cvHeight, setCvHeight] = useState("90vh");

  useEffect(() => {
    console.log("Chemin du fichier :", cvFile);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCvHeight("90vh");
      } else if (width >= 768) {
        setCvHeight("80vh");
      } else {
        setCvHeight("75vh");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="cv-container futuristic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.h2
        className="cv-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Retrouvez mon CV ici !
      </motion.h2>

      <motion.div
        className="cv-preview"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <FileText className="icon neon-glow" />
        <div className="cv-view futuristic-border" style={{ height: cvHeight }}>
          <iframe
            title="CV Viewer"
            src={cvFile}
            width="100%"
            height="100%"
            className="cv-pdf-viewer"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
}
