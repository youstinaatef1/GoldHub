import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ShopDashboard.module.css";

function ShopDashboard() {

  // Layer 1 (State)

  const [shops, setShops] = useState([
    {
      id: 1,
      shopName: "Golden House",
      logo: "https://img.magnific.com/premium-vector/gold-jewelers-shop-logo-vector-art-illustration-with-perfect-stylish-modern-shape-38_554682-10849.jpg?semt=ais_hybrid&w=740&q=80",
      location: "Cairo",
      phoneNumber: "01012345678",
      workingHours: {
        from: "09:00 AM",
        to: "09:00 PM",
      },
      goldPrice: 2450,
      isActive: true,
    },
    {
      id: 2,
      shopName: "Royal Gold",
      logo: "https://img.magnific.com/free-vector/shiny-diamond-jewelry-logo-vector-design-with-tagline-space_1017-44515.jpg?semt=ais_hybrid&w=740&q=80",
      location: "Giza",
      phoneNumber: "01122334455",
      workingHours: {
        from: "10:00 AM",
        to: "10:00 PM",
      },
      goldPrice: 2465,
      isActive: true,
    },
    {
      id: 3,
      shopName: "Shiny Gold",
      logo: "https://img.magnific.com/premium-vector/diamond-jewellery-jewelry-logo-jewellery-shop-logo-golden-color-unique-shape-sparkle-diamond_981536-1312.jpg?semt=ais_hybrid&w=740&q=80",
      location: "Alexandria",
      phoneNumber: "01234567890",
      workingHours: {
        from: "09:30 AM",
        to: "09:30 PM",
      },
      goldPrice: 2445,
      isActive: false,
    },
  ]);

  // Layer 2 (API Later)

  // Layer 3 (Handlers)

  const onDeleteHandler = (shopId) => {
    const newShops = shops.filter((shop) => shop.id !== shopId);
    setShops(newShops);
  };

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h4 className="fw-bold">
          Shops List
        </h4>

        <Link to="add" className={`${styles.buttonNew} btn text-white`}>
          Add New Shop
        </Link>

      </div>

      <div className={styles.tableWrapper}>

        <table className={`table table-hover align-middle ${styles.table}`}>

          <thead>

            <tr>

              <th>#</th>

              <th>Shop Name</th>

              <th>Logo</th>

              <th>Location</th>

              <th>Phone</th>

              <th>Working Hours</th>

              <th>Gold Price</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {shops.map((shop) => (

              <tr key={shop.id}>

                <td>{shop.id}</td>

                <td>{shop.shopName}</td>

                <td>

                  <img
                    src={shop.logo}
                    alt={shop.shopName}
                    width="60"
                    height="60"
                    className="rounded"
                  />

                </td>

                <td>{shop.location}</td>

                <td>{shop.phoneNumber}</td>

                <td>

                  {shop.workingHours.from}

                  <br />

                  {shop.workingHours.to}

                </td>

                <td>{shop.goldPrice} EGP</td>

                <td>

                  {shop.isActive ? (

                    <span className="badge bg-success">
                      Active
                    </span>

                  ) : (

                    <span className="badge bg-danger">
                      Inactive
                    </span>

                  )}

                </td>

                <td>

                  <button className="btn btn-warning btn-sm me-2 text-white">

                    Edit

                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteHandler(shop.id)}
                  >

                    Delete

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ShopDashboard;