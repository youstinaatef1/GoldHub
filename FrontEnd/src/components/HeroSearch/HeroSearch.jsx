import React, { useState } from 'react';
import styles from './HeroSearch.module.css';
import { mockProducts } from '../../data/mockData';

const HeroSearch = () => {
  // 1. State الفلاتر
  const [filters, setFilters] = useState({
    category: '',
    karat: '',
    size: '',
    city: ''
  });

  // 2. State لحفظ وعرض النتائج
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // تحديث القيم مع كل كتابة أو اختيار
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // تنفيذ البحث والفلترة عند الضغط على Find Piece
  const handleSearch = (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة نهائياً
    setHasSearched(true);

    const filtered = mockProducts.filter((item) => {
      // مطابقة القسم
      const matchCategory = filters.category === '' || item.category.toLowerCase() === filters.category.toLowerCase();

      // مطابقة العيار
      const matchKarat = filters.karat === '' || item.karat.toLowerCase() === filters.karat.toLowerCase();

      // مطابقة المقاس أو الوزن
      const matchSize = filters.size === '' || 
        item.size.toLowerCase().includes(filters.size.toLowerCase()) || 
        item.weight.toString().includes(filters.size);

      // مطابقة المدينة أو مكان المحل
      const matchCity = filters.city === '' || 
        item.shop.location.toLowerCase().includes(filters.city.toLowerCase());

      return matchCategory && matchKarat && matchSize && matchCity;
    });

    setSearchResults(filtered);
  };

  return (
    <section className={styles.heroWrapper}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <span className={styles.badgeText}>The Ultimate Gold Discovery Platform</span>
            <h1 className={styles.headline}>
              Find the Gold Jewelry You Love,<br />
              <span>In Your Size, From The Right Shop.</span>
            </h1>
            <p className={styles.subtext}>
              Stop wandering between stores. Explore authentic gold pieces from trusted verified jewelers near you.
            </p>
          </div>
        </div>

        {/* شريط الفلترة والبحث */}
        <div className={styles.searchCard}>
          <form onSubmit={handleSearch} className="row g-3 align-items-center">
            <div className="col-md-3">
              <label className={styles.label}><i className="fa-solid fa-gem me-1"></i> Category</label>
              <select 
                name="category" 
                value={filters.category} 
                className="form-select custom-select" 
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                <option value="rings">Rings</option>
                <option value="necklaces">Necklaces</option>
                <option value="bracelets">Bracelets</option>
                <option value="earrings">Earrings</option>
                <option value="bars">Gold Bars</option>
                <option value="coins">Gold Coins</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className={styles.label}><i className="fa-solid fa-award me-1"></i> Karat</label>
              <select 
                name="karat" 
                value={filters.karat} 
                className="form-select" 
                onChange={handleChange}
              >
                <option value="">Any Karat</option>
                <option value="18k">18K</option>
                <option value="21k">21K</option>
                <option value="24k">24K</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className={styles.label}><i className="fa-solid fa-ruler me-1"></i> Size / Weight</label>
              <input 
                type="text" 
                name="size" 
                value={filters.size}
                className="form-control" 
                placeholder="e.g. 16 or 5g" 
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <label className={styles.label}><i className="fa-solid fa-location-dot me-1"></i> Location / City</label>
              <input 
                type="text" 
                name="city" 
                value={filters.city}
                className="form-control" 
                placeholder="e.g. Zamalek, Cairo" 
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2 text-end">
              <label className="d-none d-md-block">&nbsp;</label>
              <button type="submit" className={`w-100 ${styles.searchBtn}`}>
                <i className="fa-solid fa-magnifying-glass me-2"></i>Find Piece
              </button>
            </div>
          </form>
        </div>

        {/* عرض نتائج الفلترة المباشرة فور الضغط */}
        {hasSearched && (
          <div className="mt-5">
            <h4 className="text-white mb-3">
              Search Results: <span style={{ color: '#D4AF37' }}>({searchResults.length}) Pieces Found</span>
            </h4>
            
            {searchResults.length === 0 ? (
              <div className="p-4 text-center text-muted border border-secondary rounded">
                No jewelry pieces match your selected filters. Try broadening your search.
              </div>
            ) : (
              <div className="row g-3">
                {searchResults.map((item) => (
                  <div className="col-12 col-md-4" key={item._id}>
                    <div className="card bg-black text-white border-secondary p-3 h-100">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        style={{ height: '180px', objectFit: 'cover', borderRadius: '6px' }} 
                      />
                      <h5 className="mt-3 text-warning">{item.name}</h5>
                      <div className="text-muted small">
                        <span>{item.karat.toUpperCase()}</span> | <span>{item.weight}g</span> | <span>Size: {item.size}</span>
                      </div>
                      <div className="small text-secondary mt-1">
                        <i className="fa-solid fa-store me-1"></i>{item.shop.name} ({item.shop.location})
                      </div>
                      <div className="fw-bold mt-2 fs-5">{item.price.toLocaleString()} EGP</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default HeroSearch;