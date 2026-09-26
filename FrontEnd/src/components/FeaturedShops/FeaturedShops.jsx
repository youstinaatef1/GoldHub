import React from 'react';
import styles from './FeaturedShops.module.css';
import { mockShops } from '../../data/mockData';

const FeaturedShops = () => {
  return (
    <section className={`py-5 ${styles.shopsSection}`} id="shops">
      <div className="container">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <span className={styles.sectionBadge}>Verified Jewelers</span>
            <h2 className={styles.sectionTitle}>Find Gold Shops Near You</h2>
            <div className={styles.accentLine}></div>
          </div>
          
          <button className={styles.viewAllBtn}>
            View All Shops <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>

        {/* Shops Grid */}
        <div className="row g-4">
          {mockShops.map((shop) => (
            <div className="col-12 col-sm-6 col-lg-3" key={shop._id}>
              <div className={styles.shopCard}>
                
                {/* Logo & Rating */}
                <div className={styles.logoWrapper}>
                  <img src={shop.logo} alt={shop.name} className={styles.shopLogo} />
                  <span className={styles.ratingBadge}>
                    <i className="fa-solid fa-star me-1"></i>{shop.rating}
                  </span>
                </div>

                {/* Details */}
                <h4 className={styles.shopName}>{shop.name}</h4>
                
                <div className={styles.infoMeta}>
                  <p className={styles.metaItem}>
                    <i className="fa-solid fa-location-dot text-gold"></i>
                    <span>{shop.location}</span>
                  </p>
                  <p className={styles.metaItem}>
                    <i className="fa-solid fa-clock text-gold"></i>
                    <span>{shop.workingHours}</span>
                  </p>
                </div>

                <div className={styles.stockNote}>
                  {shop.productsCount} Pieces Available
                </div>

                {/* Action Button */}
                <button className={styles.viewShopBtn}>
                  View Shop
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedShops;