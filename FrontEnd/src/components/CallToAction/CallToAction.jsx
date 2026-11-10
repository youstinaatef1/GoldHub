import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.glowOverlay}></div>
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <span className={styles.tagline}>Start Your Journey</span>
            <h2 className={styles.heading}>
              Ready to Find Your Perfect Gold Piece?
            </h2>
            <p className={styles.subtext}>
              Explore thousands of designs from gold shops in one place.
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>
                <i className="fa-solid fa-gem me-2"></i> Explore Products
              </button>
              <button className={styles.secondaryBtn}>
                <i className="fa-solid fa-store me-2"></i> Find a Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;