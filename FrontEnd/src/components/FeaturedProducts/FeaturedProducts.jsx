import React from 'react';
import { mockProducts } from '../../data/mockData';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  return (
    <section className={`py-5 ${styles.sectionWrapper}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className={styles.tagline}>Curated Selection</span>
            <h2 className={styles.heading}>Trending Gold Pieces</h2>
          </div>
          <button className={styles.viewAllBtn}>
            View All Catalog <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>

        <div className="row g-4">
          {mockProducts.map((product) => (
            <div className="col-12 col-md-6 col-lg-4" key={product._id}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={product.images[0]} alt={product.name} className={styles.image} />
                  <span className={styles.karatBadge}>{product.karat.toUpperCase()}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.shopInfo}>
                    <i className="fa-solid fa-store me-1"></i> {product.shop.name}
                    <span className={styles.location}> • {product.shop.location}</span>
                  </div>

                  <h3 className={styles.title}>{product.name}</h3>

                  <div className={styles.specsRow}>
                    <span><i className="fa-solid fa-weight-hanging me-1"></i> {product.weight}g</span>
                    <span><i className="fa-solid fa-ruler me-1"></i> {product.size}</span>
                  </div>

                  <div className={styles.footerRow}>
                    <div className={styles.price}>
                      {product.price.toLocaleString()} <span className={styles.currency}>EGP</span>
                    </div>
                    <button className={styles.actionBtn}>Check Store</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;