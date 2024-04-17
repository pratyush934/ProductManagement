import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {
  saveProdcut(product) {
    return axios.post(API_URL + "/save", product);
  }

  getAllProduct() {
    return axios.get(API_URL + "/");
  }

  getProductById(id) {
    return axios.get(API_URL + "/" + id);
  }

  deleteProduct(id) {
    return axios.delete(API_URL + "/deleteProduct/" + id);
  }

  editProdcut(product) {
    return axios.post(API_URL + "/edit/" + product.id, product);
  }
}

export default new ProductService();
