import { useState } from "react";
// import { Edit, Eye, Heart, Package, Plus, Trash2, Upload } from "lucide-react";

// import Button from "../../Ui/Button/Button";
// import Input from "../../Input/Input";

// import styles from "./ShopDashboard.module.css";


function ShopDashboard() {


  // layer 1 states & Global Data


  const [products, setProducts] = useState([
    {
      id:1,
      title:"Elegant Diamond Ring",
      type:"Ring",
      image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300",
      views:234,
      favorites:12,
      status:"Active"
    },

    {
      id:2,
      title:"Gold Chain Bracelet",
      type:"Bracelet",
      image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300",
      views:156,
      favorites:15,
      status:"Active"
    }
  ]);



  const [showAddModal,setShowAddModal] = useState(false);



  const [formData,setFormData] = useState({
    title:"",
    type:"Ring",
    color:"Yellow Gold",
    style:"Classic",
    description:"",
    sizes:[]
  });




  const stats=[
    {
      id:1,
      count:24,
      title:"Total Products",
      icon:<Package/>
    },

    {
      id:2,
      count:1234,
      title:"Total Views",
      icon:<Eye/>
    },

    {
      id:3,
      count:89,
      title:"Favorites",
      icon:<Heart/>
    }
  ];



  const sizes=[
    "Small",
    "Medium",
    "Large",
    "XL"
  ];






  // layer 2 (effects)
  // API Call






  // layer 3 Handler


  const onDeleteHandler=(productId)=>{


    const newProductsArr = products.filter(
      (product)=> product.id !== productId
    );


    setProducts(newProductsArr);


  };




  const onInputChangeHandler=(e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };




  const onSizeHandler=(size)=>{


    setFormData({

      ...formData,


      sizes:

      formData.sizes.includes(size)

      ?

      formData.sizes.filter(item=>item !== size)

      :

      [...formData.sizes,size]

    });


  };







  // layer 4 JSX


  return (


    <div className="container py-4">


      <div className="d-flex align-items-center justify-content-between mb-4">


        <div>

          <h5 className="mb-1 fw-semibold">
            Shop Dashboard
          </h5>


          <p className="text-muted">
            Manage your jewelry products
          </p>


        </div>




        <Button onClick={()=>setShowAddModal(true)}>

          <Plus size={18}/>

          Add Product

        </Button>


      </div>







      {/* Stats */}


      <div className="row g-3 mb-4">


      {
        stats.map(stat=>(


          <div 
          className="col-md-4"
          key={stat.id}
          >


            <div className="card p-3">


              <div className="d-flex justify-content-between">


                <div>


                  <p>
                    {stat.title}
                  </p>


                  <h3>
                    {stat.count}
                  </h3>


                </div>



                {stat.icon}



              </div>



            </div>


          </div>



        ))
      }


      </div>









      {/* Products Table */}



      <div className={styles.tableWrapper}>


      <table className={`table mb-0 ${styles.table}`}>


      <thead>


      <tr>


        <th>
          Product
        </th>


        <th>
          Type
        </th>


        <th>
          Views
        </th>


        <th>
          Favorites
        </th>


        <th>
          Actions
        </th>


      </tr>


      </thead>





      <tbody>


      {


      products.map(product=>(



        <tr key={product.id}>


          <td>


          <div className="d-flex align-items-center gap-3">


          <img
          src={product.image}
          width="50"
          height="50"
          />


          {product.title}


          </div>


          </td>




          <td>
            {product.type}
          </td>



          <td>

          <Eye size={16}/>

          {product.views}

          </td>




          <td>

          <Heart size={16}/>

          {product.favorites}

          </td>





          <td>


          <button className="btn btn-sm">


          <Edit size={18}/>


          </button>




          <button 

          className="btn btn-danger btn-sm"

          onClick={()=>onDeleteHandler(product.id)}

          >

          <Trash2 size={18}/>


          </button>



          </td>




        </tr>



      ))


      }



      </tbody>



      </table>


      </div>









      {/* Add Modal */}



      {

      showAddModal &&


      <div className="modal d-block bg-dark bg-opacity-50">


      <div className="modal-dialog">


      <div className="modal-content">


      <div className="modal-header">


      <h4>
        Add Product
      </h4>


      </div>





      <div className="modal-body">


      <Input

      label="Title"

      name="title"

      value={formData.title}

      onChange={onInputChangeHandler}

      />




      <label>
        Type
      </label>


      <select

      className="form-control"

      name="type"

      value={formData.type}

      onChange={onInputChangeHandler}

      >


      <option>
        Ring
      </option>


      <option>
        Bracelet
      </option>


      <option>
        Necklace
      </option>


      </select>






      <label className="mt-3">
        Sizes
      </label>


      <div>


      {
        sizes.map(size=>(


          <button

          key={size}

          className="btn btn-outline-dark m-1"

          onClick={()=>onSizeHandler(size)}

          >


          {size}


          </button>


        ))
      }


      </div>






      <textarea

      className="form-control mt-3"

      name="description"

      placeholder="Description"

      onChange={onInputChangeHandler}


      />



      </div>







      <div className="modal-footer">


      <Button
      onClick={()=>setShowAddModal(false)}
      >

      Cancel

      </Button>



      <Button>

      <Upload size={18}/>

      Add

      </Button>


      </div>




      </div>


      </div>


      </div>


      }



    </div>


  );

}


export default ShopDashboard;