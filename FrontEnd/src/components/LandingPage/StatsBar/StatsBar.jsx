import React from 'react';
import styles from './StatsBar.module.css';

export default function StatsBar() {

  const statsData = [
    {
      id: 1,
      icon: 'fa-solid fa-scale-balanced', 
      number: '10,000+',
      label: 'القضايا الناجحة',
      link: '#'
    },
    {
      id: 2,
      icon: 'fa-solid fa-user-tie', 
      number: '5,600+',
      label: 'محامي متخصص',
      link: '#'
    },
    {
      id: 3,
      icon: 'fa-solid fa-file-contract', 
      number: '3,485+',
      label: 'عقد واستشارة',
      link: '#'
    },
    {
      id: 4,
      icon: 'fa-solid fa-users', 
      number: '69,485+',
      label: 'إجمالي المستفيدين',
      link: '#'
    }
  ];

  return (
    <div className={styles.barContainer}>
      {statsData.map((item) => (
        <div key={item.id} className={styles.statBox}>
          <a href={item.link} className={styles.iconLink}>
            <i className={item.icon}></i>
          </a>
          <a href={item.link} className={styles.numberLink}>
            <h6 className={styles.number}>{item.number}</h6>
          </a>
          <a href={item.link} className={styles.labelLink}>
            <p className={styles.label}>{item.label}</p>
          </a>
        </div>
      ))}
    </div>
  );
}