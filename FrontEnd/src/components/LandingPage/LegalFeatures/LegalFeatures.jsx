import React from 'react';
import styles from './LegalFeatures.module.css';

export default function LegalFeatures() {
  const features = [
    {
      id: 1,
      icon: 'fa-solid fa-gavel', 
      title: 'استشارات عاجلة (Urgent Advice)',
      desc: 'احصل على رد سريع ومباشر من محامين متخصصين للحالات والقضايا الطارئة.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-scale-balanced', 
      title: 'محامون معتمدون (Certified Lawyers)',
      desc: 'نخبة من أفضل المحامين في مختلف التخصصات (جنائي، تجاري، أحوال شخصية، عقارات).'
    },
    {
      id: 3,
      icon: 'fa-solid fa-file-signature', 
      title: 'صياغة ومراجعة العقود (Contract Review)',
      desc: 'حماية كاملة لاتفاقياتك ومعاملاتك التجارية مع مراجعة دقيقة لكافة البنود والشروط.'
    }
  ];

  return (
    <section className={styles.container}>
      
      <div className={styles.featuresList}>
        {features.map((item) => (
          <div key={item.id} className={styles.featureItem}>
            <div className={styles.iconBox}>
              <i className={item.icon}></i>
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.description}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* الصورة الجانبية */}
      <div className={styles.imageBox}>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" 
          alt="LowBridge Legal Protection" 
          className={styles.legalImage}
        />
      </div>
    </section>
  );
}