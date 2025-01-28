import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bonjour, je suis Anthony Cote</h1>
        <p className={styles.description}>
        Je suis développeur passionné, par la création d'applications web, le développement logiciel et l'intelligence artificielle. J'aime relever des défis techniques, apprendre de nouvelles technologies et partager mes connaissances avec la communauté. 🚀
        </p>
        <a href="mailto:antho.cote69@gmail.com" className={styles.contactBtn}>
          Me contacter ?
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
