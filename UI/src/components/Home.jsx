import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";

function Home() {


  /* 
  
  data
: 
Array(5)
0
: 
{id: 1, productName: 'Fair and Lovely', description: 'Gora kar dega aapko', status: 'Failed Product', price: 1500}
1
: 
{id: 3, productName: 'batman vs Superman V2', description: 'Exciting hai ye V2', status: 'Successful V2', price: 10000}
2
: 
{id: 4, productName: 'IPhone', description: 'It is classy', status: 'Save', price: 500}
3
: 
{id: 5, productName: 'Samsung Galaxy', description: 'It is great */


  const [product, setProdcut] = useState

  const gettingAllList = async () => {
    try {
      const response = await ProductService.getAllProduct();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAllList();
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-success table-striped">
        <thead>
          <tr className="custom-row">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="custom-row">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
