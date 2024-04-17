import { useState } from "react";
import ProductService from "../service/ProductService";

function AddProduct() {
  /* 
  
   private String productName;


    private String description;
    private String status;
    private Double price;
*/

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    status: "",
    price: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  const productRegistry = async (e) => {
    e.preventDefault();
    try {
      await ProductService.saveProdcut(product);
      console.log(`Ho gaya ji`);
    } catch (error) {
      console.log(error);
    }

    setProduct((prev) => {
      return {
        ...prev,
        productName: "",
        description: "",
        status: "",
        price: 0,
      };
    });
  };

  // console.log(product);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">
              Add Product details
            </div>
            <div className="card-body">
              <form onSubmit={(e) => productRegistry(e)}>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={product.status}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
