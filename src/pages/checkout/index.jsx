import { useEffect, useState } from "react";
import "./checkout.css";
import Navbar from "../navbar";
import Header from "../header";
import Restaurant from "../home/restaurants";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import LocationIcon from "./Icon.png";
import ArrowRight from "./ArrowRight.png"
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  const salesTax = 10; 

  // Load cart details from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

    // Scroll to the top when the component loads
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

  // Calculate subtotal
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate total
  const calculateTotal = () => calculateSubtotal() + salesTax;

  const navigate=useNavigate()

  const handleClick = ()=>{
    const totalPrice = calculateTotal();
  localStorage.setItem("totalPrice", totalPrice);
    navigate("/payment")
  }

  const navigateBack = ()=>{
    navigate("/product")
  }

  const handleLocation = ()=>{
    navigate("/address")
  }

  return (
    <>
      <div className="checkout-page">
        <Navbar />
        <Header />
        <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading" >
            <h2>Your Order Details</h2>
          </div>
        </div>
        <div className="checkout-container">
          <div className="order-details">
            <div className="order-items">
              {cartItems.map((item) => (
                <>
                  <div className="order-item" key={item.id}>
                    <div className="order-item-details">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="order-item-image"
                      />
                      <div className="order-name">
                        <h5>{item.name}</h5>
                        <p>{item.quantity} x item</p>
                      </div>
                    </div>

                    <div className="order-price">
                      <p style={{ color: "#028643" }}>
                        ₹{item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                  <hr style={{ color: "#202938" }} />
                </>
              ))}
              <p style={{ color: "#83858A", marginBottom: "0px" }}>Notes</p>
              <input
                placeholder="Add order notes"
                className="order-notes"
              ></input>
            </div>
          </div>
          <div className="order-summary">
            <div className="delivery-address" onClick={handleLocation}>
              <div className="delivery-location">
                <img style={{ width:'50px', marginTop:'5px'  }} src={LocationIcon} />
                <div>
                  <p style={{ fontWeight: "bold",margin:'0px'  }}>Delivery Address</p>
                  <p style={{ color: "#83858A",margin:'0px' }}>
                    46, Green Street, Sector 12...
                  </p>
                </div>
              </div>
              <div className="change-location">
                <img style={{ width:'20px', marginRight:'5px'  }} src={ArrowRight}/>
              </div>
              
            </div>
            <div className="price-details">
            <hr style={{ color: "#202938" }} />
              <div>
                <span>Items</span>
                <span>₹{calculateSubtotal()}</span>
              </div>

              
              <div>
                <span>Sales Tax</span>
                <span>₹{salesTax}</span>
              </div>
              <hr style={{ color: "#202938" }} />
              <div className="total">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={handleClick}>Choose Payment Method</button>
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <Restaurant title="Similar Restaurants" />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
