import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDashboard.module.css";

function ProductDashboard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Diamond Ring",
      description: "Luxury 21K Gold Ring",
      price: 18500,
      category: "ring",
      karat: 21,
      weight: 5,
      images: "https://elgalla.com/wp-content/uploads/2026/04/YZ8Chf1Aet2jH41HxdTn-1080x1080.png",
      stock: 8,
      isAvailable: true,
      views: 154,
    },
    {
      id: 2,
      productName: "Gold Necklace",
      description: "Elegant Necklace",
      price: 32000,
      category: "necklace",
      karat: 18,
      weight: 12,
      images: "https://elgalla.com/wp-content/uploads/2026/04/WnMEhWl4gWYZhUIh5WG1-1080x1080.png",
      stock: 3,
      isAvailable: true,
      views: 95,
    },
    {
      id: 3,
      productName: "Gold Coin",
      description: "24K Gold Coin",
      price: 15000,
      category: "coin",
      karat: 24,
      weight: 4,
      images: "https://floward.imgix.net/web/Files/thumPro/710ce24a-c464-46a4-82a5-a157b02c11a5.jpg?w=550&h=550&fit=crop&auto=format,compress",
      stock: 0,
      isAvailable: false,
      views: 210,
    },
  ]);

  const onDeleteHandler = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">Products List</h4>

        <Link
          to="add"
          className={`${styles.buttonNew} btn text-white`}
        >
          Add New Product
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table align-middle ${styles.table}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Karat</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Views</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>

                <td>
                  <img
                    src={product.images}
                    alt={product.productName}
                    width="60"
                    className="rounded"
                  />
                </td>

                <td>
                  <strong>{product.productName}</strong>
                  <br />
                  <small className="text-muted">
                    {product.description}
                  </small>
                </td>

                <td>{product.category}</td>
                <td>{product.karat}K</td>
                <td>{product.weight} g</td>
                <td>{product.price} EGP</td>
                <td>{product.stock}</td>
                <td>{product.views}</td>

                <td>
                  {product.isAvailable ? (
                    <span className="badge bg-success">
                      Available
                    </span>
                  ) : (
                    <span className="badge bg-danger">
                      Out Of Stock
                    </span>
                  )}
                </td>

                <td>
                  <button className="btn btn-warning btn-sm me-2 text-white">
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteHandler(product.id)}
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

export default ProductDashboard;