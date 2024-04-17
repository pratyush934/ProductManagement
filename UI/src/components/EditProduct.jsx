import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../service/ProductService";

function EditProduct() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [oldProduct, setOldProduct] = useState({
    id: "",
    productName: "",
    description: "",
    status: "",
    price: "",
  });


  useEffect(() => {
    getProductById();
  }, [id]);

  const getProductById = async () => {
    try {
      const response = await ProductService.getProductById(id);
      const productById = response.data;
      // console.log(productById.id);
      setOldProduct((prevProduct) => {
        return {
          ...prevProduct,
          id: productById.id,
          productName: productById.productName,
          description: productById.description,
          status: productById.status,
          price: productById.price,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateRegistry = async (e) => {
    e.preventDefault();
    try {
      const response = await ProductService.editProduct(oldProduct);
      console.log(response.data.id);
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setOldProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">
              Update Product details
            </div>
            <div className="card-body">
              <form onSubmit={updateRegistry}>
                <div className="mb-3">
                  <label>Enter Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    value={oldProduct.productName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={oldProduct.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={oldProduct.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Product Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={oldProduct.status}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary">Update Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
