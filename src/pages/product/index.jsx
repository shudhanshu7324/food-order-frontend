import Header from "../header";
import Navbar from "../navbar";
import Information from "./Information";
import McDonaldsHeader from "./McDonaldHeader";
import Burger from "./menus/Burger";
import ColdDrinks from "./menus/ColdDrinks";
import Fries from "./menus/Fries";
import NavSection from "./NavSection";
import OfferCard from "./OfferCard";
import OffersContainer from "./OffersContainer";
import Footer from "../footer";
import "./product.css";
import Reviews from "./reviews";
import Restaurant from "../home/restaurants";
import MapComponent from "./map";
import CartModel from "./cart-management/CartModel";
import { useState, useRef, useEffect } from "react";

const Product = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const mainContentRef = useRef(null);

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    // Scroll to .main-content
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [cartItems, setCartItems] = useState(() => {
    // Load initial state from local storage
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const deliveryFee = 3.0; // Static delivery fee
  const discount = 3.0; // Static discount

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    // Scroll to the top when the component loads
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate total
  const calculateTotal = () => calculateSubtotal() - discount + deliveryFee;

  return (
    <>
      <div className="product-page">
        <Navbar isCartOpen={isCartOpen} toggleCart={toggleCart} />
        <Header />
        <McDonaldsHeader />
        <OffersContainer />
      </div>
      <NavSection className="no-margin" />
      <div className="product-page">
        <div ref={mainContentRef} className="main-content">
          {/* Wrap OfferCard, Burger, and CartModel */}
          <div className={`content-sections ${isCartOpen ? "cart-open" : ""}`}>
            <div className="left-sections">
              <OfferCard />
              <Burger addToCart={addToCart} />
            </div>
            {isCartOpen && (
              <div className="cart-section">
                <CartModel
                  isCartOpen={isCartOpen}
                  toggleCart={toggleCart}
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  subtotal={calculateSubtotal()}
                  discount={discount}
                  deliveryFee={deliveryFee}
                  total={calculateTotal()}
                />
              </div>
            )}
          </div>
        </div>

        <Fries addToCart={addToCart} />
        <ColdDrinks addToCart={addToCart} />
        <Information />
        <MapComponent />
      </div>
      <Reviews />
      <div className="product-page">
        <Restaurant title="Similar Restaurants" />
        <CartModel isCartOpen={isCartOpen} toggleCart={toggleCart} total={calculateTotal()} />
      </div>
      <Footer />
    </>
  );
};

export default Product;
