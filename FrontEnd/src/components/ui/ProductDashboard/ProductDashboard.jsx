import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import styles from "./ProductDashboard.module.css";

function ProductDashboard() {
=======


function ProductsDashboard() {

  // layer 1 states & Global Data
>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c

  const [products, setProducts] = useState([
    {
      id: 1,
<<<<<<< HEAD
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

=======
      name: "Gold Ring",
      category: "Ring",
      karat: "21K",
      weight: "5g",
      price: "18000 EGP",
      stock: 5,
    },
    {
      id: 2,
      name: "Gold Necklace",
      category: "Necklace",
      karat: "18K",
      weight: "12g",
      price: "42000 EGP",
      stock: 3,
    },
    {
      id: 3,
      name: "Gold Bracelet",
      category: "Bracelet",
      karat: "24K",
      weight: "8g",
      price: "25000 EGP",
      stock: 6,
    },
    {
      id: 4,
      name: "Gold Earrings",
      category: "Earrings",
      karat: "21K",
      weight: "4g",
      price: "12000 EGP",
      stock: 10,
    },
  ]);

  // layer 2 effects (API later)

  // layer 3 handlers

  const onDeleteHandler = (productId) => {
    const newProducts = products.filter(
      (product) => product.id !== productId
    );

    setProducts(newProducts);
  };

  // layer 4 JSX

>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c
  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
<<<<<<< HEAD

        <h4 className="fw-semibold">
          Products List
        </h4>

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

=======
        <h4 className="fw-bold">Products List</h4>

        <Link to="add" className="btn btn-warning">
          Add Product
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table table-hover ${styles.table}`}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Karat</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c
              <tr key={product.id}>

                <td>{product.id}</td>

<<<<<<< HEAD
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
=======
                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>{product.karat}</td>

                <td>{product.weight}</td>

                <td>{product.price}</td>

                <td>{product.stock}</td>

                <td>
                  <button className="btn btn-danger btn-sm me-2"
>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c
                    onClick={() => onDeleteHandler(product.id)}
                  >
                    Delete
                  </button>

<<<<<<< HEAD
                </td>

              </tr>

            ))}

          </tbody>

        </table>

=======
                  <button className="btn btn-primary btn-sm">
                    Edit
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c
      </div>

    </div>
  );
}

<<<<<<< HEAD
export default ProductDashboard;
=======
export default ProductsDashboard;
>>>>>>> ec6ce7b42884d359849426654f1b5b0aa737121c
