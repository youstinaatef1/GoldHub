import { useState } from "react";

function ProductForm() {

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    karat: "",
    weight: "",
    image: "",
    stock: "",
    isAvailable: true,
  });

  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Added Successfully");
  };

  return (
    <div className="container py-4">

      <div className="bg-white rounded shadow-sm p-4">

        <h4 className="mb-4">
          Add New Product
        </h4>

        <form onSubmit={submitHandler}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label>Product Name</label>

              <input
                type="text"
                name="productName"
                className="form-control"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Price</label>

              <input
                type="number"
                name="price"
                className="form-control"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Category</label>

              <select
                name="category"
                className="form-select"
                onChange={changeHandler}
              >
                <option>ring</option>
                <option>necklace</option>
                <option>bracelet</option>
                <option>earring</option>
                <option>coin</option>
                <option>bar</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label>Karat</label>

              <select
                name="karat"
                className="form-select"
                onChange={changeHandler}
              >
                <option>18</option>
                <option>21</option>
                <option>24</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label>Weight</label>

              <input
                type="number"
                name="weight"
                className="form-control"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Stock</label>

              <input
                type="number"
                name="stock"
                className="form-control"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Image URL</label>

              <input
                type="text"
                name="image"
                className="form-control"
                onChange={changeHandler}
              />
            </div>

            <div className="col-12 mb-3">

              <label>Description</label>

              <textarea
                rows="4"
                name="description"
                className="form-control"
                onChange={changeHandler}
              />

            </div>

          </div>

          <div className="text-end">

            <button
              className="btn btn-warning text-white"
            >
              Add Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ProductForm;