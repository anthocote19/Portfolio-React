import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>A Propos de moi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur junior</h3>
              <p>
              Je suis développeur passionné par la création d'applications web, le développement logiciel et l'intelligence artificielle. J'aime relever des défis techniques, apprendre de nouvelles technologies et partager mes connaissances avec la communauté ! 🚀
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Passioné par l'informatique</h3>
              <p>
                Depuis tout petit, je m'intéresse au monde du numérique et notamment aux ordinateurs ! 🚀
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Footballeur Amateur</h3>
              <p>
               Je pratique le football par passion, souvent dans un cadre non professionnel, comme des clubs locaux ou des compétitions régionales ! 🚀
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
