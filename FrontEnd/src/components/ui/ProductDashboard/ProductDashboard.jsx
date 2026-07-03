import { useState } from "react";
import { Link } from "react-router-dom";


function ProductsDashboard() {

  // layer 1 states & Global Data

  const [products, setProducts] = useState([
    {
      id: 1,
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

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
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
              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>{product.karat}</td>

                <td>{product.weight}</td>

                <td>{product.price}</td>

                <td>{product.stock}</td>

                <td>
                  <button className="btn btn-danger btn-sm me-2"
                    onClick={() => onDeleteHandler(product.id)}
                  >
                    Delete
                  </button>

                  <button className="btn btn-primary btn-sm">
                    Edit
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

export default ProductsDashboard;