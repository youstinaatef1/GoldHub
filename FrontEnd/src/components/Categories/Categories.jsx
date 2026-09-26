import React from 'react';
import styles from './Categories.module.css';

const categories = [
  { name: 'Rings', count: '120+ Designs', icon: 'fa-ring' },
  { name: 'Necklaces', count: '85+ Designs', icon: 'fa-gem' },
  { name: 'Bracelets', count: '94+ Designs', icon: 'fa-link' },
  { name: 'Earrings', count: '60+ Designs', icon: 'fa-circle-dot' },
  { name: 'Gold Bars', count: '24K Investment', icon: 'fa-bars' },
  { name: 'Gold Coins', count: 'Standard Weight', icon: 'fa-coins' }
];

const Categories = () => {
  return (
    <section className={`py-5 ${styles.categorySection}`} id="categories">
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>Browse by Type</span>
          <h2 className={styles.sectionTitle}>Jewelry Categories</h2>
          <div className={styles.goldLine}></div>
        </div>

        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <div className={styles.categoryCard}>
                <div className={styles.iconCircle}>
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <h5 className={styles.catName}>{cat.name}</h5>
                <span className={styles.catCount}>{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;