import { Header } from "../../components/Header";
import axios from "axios";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   return response.json()
  // }).then((data)=>{
  //     console.log(data)
  //   })


  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid 
        products={products}
        loadCart={loadCart}
        />
      </div>
    </>
  );
}
