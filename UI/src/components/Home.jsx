import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router-dom";

function Home() {
  const [product, setProdcut] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const gettingAllList = async () => {
    try {
      const response = await ProductService.getAllProduct();
      setProdcut(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAllList();
  }, [isDeleted]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsDeleted(false);
    }, 1200);

    return () => clearTimeout(timeId);
  }, [isDeleted]);

  const editClick = (id) => {
    console.log(id);
    navigate("/editProduct/" + id);
  };

  const deleteClick = async (id) => {
    try {
      const response = await ProductService.deleteProduct(id);
      if (response.data === "Deleted SuccessFully") {
        setIsDeleted(true);
      } else {
        setIsDeleted(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      {isDeleted && (
        <div className="alert alert-danger" role="alert">
          Item is deleted Successfully
        </div>
      )}
      <table className="table table-secondary table-striped">
        <thead>
          <tr className="custom-row">
            <th scope="col">ProductName</th>
            <th scope="col">Description</th>
            <th scope="col">Satus</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro) => (
            <tr className="custom-row" key={pro.id}>
              <td>{pro.productName}</td>
              <td>{pro.description}</td>
              <td>{pro.status}</td>
              <td>{pro.price}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editClick(pro.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClick(pro.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
