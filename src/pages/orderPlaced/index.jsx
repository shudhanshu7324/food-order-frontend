import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import { useNavigate, useLocation } from "react-router-dom";
import "./orderplaced.css";

const OrderPlaced = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Load cart details from state or local storage
  useEffect(() => {
    if (location.state?.cartItems) {
      setCartItems(location.state.cartItems); // From route state
    } else {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) setCartItems(JSON.parse(storedCart)); // From local storage
    }
  }, [location.state]);

  const handleGoHome = () => {
    localStorage.removeItem("cartItems")
    navigate("/"); // Redirect to home or any page
  };

  return (
    <>
      <div className="order-success-page">
        <Navbar />
        <Header />
        <div className="order-placed">
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732712237/Icon_1_v2r41i.png" />
          <h3>Order Placed Successfully!</h3>
          <p>
            Your order is confirmed and on its way. Get set to savor your chosen
            delights!
          </p>
          <div className="items-ordered">
            {cartItems.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
            <div className="back-to-home" onClick={handleGoHome}>
              Back to Home
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPlaced;
