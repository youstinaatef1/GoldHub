import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={`py-5 ${styles.aboutWrapper}`} id="about">
      <div className="container">
        <div className={`row align-items-center g-5 ${styles.contentBox}`}>
          
          {/* الجانب النصي */}
          <div className="col-12 col-lg-7">
            <span className={styles.tagline}>Who We Are</span>
            <h2 className={styles.heading}>About GoldHub</h2>
            <div className={styles.accentLine}></div>
            
            <p className={styles.description}>
              GoldHub makes it easier to discover gold jewelry by connecting customers 
              with gold shops and helping them find the designs and sizes they are looking for.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-shield-halved"></i>
                <span>Verified Jewelers</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-compass"></i>
                <span>Precise Search</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-gem"></i>
                <span>Authentic Pieces</span>
              </div>
            </div>

            <button className={styles.learnMoreBtn}>
              Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>

          {/* جانب بصري توضيحي أنيق */}
          <div className="col-12 col-lg-5 text-center">
            <div className={styles.visualCard}>
              <div className={styles.goldEmblem}>
                <i className="fa-solid fa-cubes-stacked"></i>
              </div>
              <h4 className={styles.cardTitle}>Smart Gold Discovery</h4>
              <p className={styles.cardText}>
                No more wandering between markets. Your desired piece, size, and store are one click away.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;