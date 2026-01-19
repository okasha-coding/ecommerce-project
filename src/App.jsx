import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";
import { useEffect, useState, } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  // const loadCart = useCallback(async () => {
  //   const response = await axios.get("/api/cart-items?expand=product");
  //   setCart(response.data);
  // }, []);

  // useEffect(() => {
  //   loadCart();
  // }, [loadCart]);

      const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product")
      // const response = await axios.get("/cart.json")
      setCart(response.data)
    }

  useEffect(() => {
    //eslint-disable-next-line
    loadCart();
  },[])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} loadCart={loadCart} />}
        ></Route>
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>}></Route>
        <Route path="orders" element={<OrdersPage cart={cart} />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
