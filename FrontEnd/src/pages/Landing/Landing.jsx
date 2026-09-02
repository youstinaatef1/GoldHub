import React, { useEffect, useState } from "react";


import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Footer from "../../components/LandingPage/FooterToLanding/FooterToLanding";
import StatsBar from "../../components/LandingPage/StatsBar/StatsBar";
import LegalFeatures from "../../components/LandingPage/LegalFeatures/LegalFeatures";

import heroImage1 from "../../assets/pexels-michael-steinberg-95604-342942.jpg";
import heroImage2 from "../../assets/pexels-sheilabox-235376934-12320900.jpg";
import heroImage3 from "../../assets/Gemini_Generated_Image_31q88i31q88i31q8.jpg";
import heroImage4 from "../../assets/pexels-alleksana-7248760.jpg"

import infoImg from "../../assets/Gemini_Generated_Image_py52iepy52iepy52.jpg";
import infoImg2 from "../../assets/licensed-image (2).jpeg";
import infoImg3 from "../../assets/licensed-image (3).jpeg";

import styles from "./Landing.module.css";

export default function LandingPage() {
  

  // =========================
  // Hero Images
  // =========================

  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // =========================
  // Change Hero Image
  // =========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        return (prev + 1) % heroImages.length;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.landingContainer}>

      <Navbar />

      {/* =========================
          Hero
      ========================= */}

      <section className={styles.heroSection}>

        <img
          src={heroImages[currentImage]}
          alt="LawBridge Hero"
          className={styles.heroImage}
        />

      </section>


      {/* =========================
          Section 1
      ========================= */}

      <section className={styles.infoSection}>

        <img
          className={styles.infoImg}
          src={infoImg}
          alt="LawBridge"
        />

        <div className={styles.infoText}>

          <h3 className={styles.infoTitle}>
            "landing.hero.title"
          </h3>

          <p className={styles.infoParagraph}>
            "landing.hero.description"
          </p>

        </div>

      </section>


      {/* =========================
          Section 2
      ========================= */}

      <section
        className={`${styles.infoSection} ${styles.infoSectionAlt}`}
      >

        <div className={styles.infoText}>

          <h3 className={styles.infoTitle}>
            "landing.trust.title"
          </h3>

          <p className={styles.infoParagraph}>
            "landing.trust.description"
          </p>

        </div>

        <img
          className={styles.infoImg2}
          src={infoImg2}
          alt="Trust"
        />

      </section>


      {/* =========================
          Section 3
      ========================= */}

      <section className={styles.infoSection}>

        <img
          className={styles.infoImg}
          src={infoImg3}
          alt="Technology"
        />

        <div className={styles.infoText}>

          <h3 className={styles.infoTitle}>
            "landing.technology.title"
          </h3>

          <p className={styles.infoParagraph}>
            "landing.technology.description"
          </p>

        </div>

      </section>


      {/* =========================
          Statistics
      ========================= */}

      <StatsBar />


      {/* =========================
          About
      ========================= */}

      <section
        className={styles.aboutSection}
        id="about"
      >

        <div className={styles.aboutHeader}>

          <h2>
            "landing.about.title"
          </h2>

          <p>
            "landing.about.description"
          </p>

        </div>

        <LegalFeatures />

      </section>


      <Footer />

    </div>
  );
}