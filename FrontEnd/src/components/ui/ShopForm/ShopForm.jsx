import { useState } from "react";

function ShopForm() {

  const [shop, setShop] = useState({
    shopName: "",
    logo: "",
    location: "",
    phoneNumber: "",
    from: "",
    to: "",
    goldPrice: "",
    isActive: true,
  });

  const changeHandler = (e) => {
    setShop({
      ...shop,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(shop);

    alert("Shop Added Successfully");
  };

  return (
    <div className="container py-4">

      <div
        className="bg-white p-4 rounded shadow-sm"
        style={{ borderRadius: "15px" }}
      >

        <h4 className="mb-4 fw-semibold">
          Add New Shop
        </h4>

        <form onSubmit={submitHandler}>

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Shop Name
              </label>

              <input
                type="text"
                className="form-control"
                name="shopName"
                value={shop.shopName}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Logo URL
              </label>

              <input
                type="text"
                className="form-control"
                name="logo"
                value={shop.logo}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Location
              </label>

              <input
                type="text"
                className="form-control"
                name="location"
                value={shop.location}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Phone Number
              </label>

              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={shop.phoneNumber}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Working From
              </label>

              <input
                type="time"
                className="form-control"
                name="from"
                value={shop.from}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Working To
              </label>

              <input
                type="time"
                className="form-control"
                name="to"
                value={shop.to}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Gold Price
              </label>

              <input
                type="number"
                className="form-control"
                name="goldPrice"
                value={shop.goldPrice}
                onChange={changeHandler}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Status
              </label>

              <select
                className="form-select"
                name="isActive"
                value={shop.isActive}
                onChange={(e) =>
                  setShop({
                    ...shop,
                    isActive: e.target.value === "true",
                  })
                }
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>

            </div>

          </div>

          <div className="text-end">

            <button
              className="btn btn-warning text-white"
              type="submit"
            >
              Add Shop
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ShopForm;