import React from 'react';
import styles from './GoldPriceTracker.module.css';
import { mockGoldPrices } from '../../data/mockData';

const GoldPriceTracker = () => {
  return (
    <section className={styles.priceSection}>
      <div className="container">
        <div className={styles.priceCard}>
          <div className="row align-items-center g-4">
            
            {/* Title & Info */}
            <div className="col-12 col-lg-3 text-center text-lg-start">
              <span className={styles.badgeLabel}>Market Benchmark</span>
              <h3 className={styles.title}>Latest Gold Prices</h3>
              <p className={styles.timestamp}>
                <i className="fa-regular fa-clock me-1"></i> Updated {mockGoldPrices.lastUpdated}
              </p>
            </div>

            {/* Price Cards Grid */}
            <div className="col-12 col-lg-9">
              <div className="row g-3">
                {mockGoldPrices.prices.map((item, index) => (
                  <div className="col-12 col-sm-4" key={index}>
                    <div className={styles.karatCard}>
                      <div className={styles.karatHeader}>
                        <span className={styles.karatBadge}>{item.karat}</span>
                        <span className={item.isPositive ? styles.changePositive : styles.changeNegative}>
                          <i className={`fa-solid ${item.isPositive ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'} me-1`}></i>
                          {item.change}
                        </span>
                      </div>
                      
                      <div className={styles.priceValue}>
                        {item.price.toLocaleString()}
                        <span className={styles.unit}>{mockGoldPrices.currency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldPriceTracker;