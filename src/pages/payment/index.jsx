import "./payment.css";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import options from "./options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Wallet from "./wallet.png";
import Methods from "./options";
import { useState,useEffect } from "react";


const Payment = () => {
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const price = localStorage.getItem("totalPrice"); // Get the total price from localStorage
        if (price) {
          setTotalPrice(price); // Update the state
        }
      }, []);

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/checkout");
  };

  const handleClick = () => {
    navigate("/orderPlaced");
   
  };

  return (
    <>
      <div className="payment-page">
        <Navbar />
        <Header />
        <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading">
            <h2>Choose and Pay</h2>
          </div>
        </div>
        <div className="payment-container">
          <div className="payment-methods">
            <div className="wallet">
              <div className="left-wallet">
                <img
                  style={{ width: "60px", height: "60px", marginTop: "10px" }}
                  src={Wallet}
                />
                <div className="balance-info">
                  <p style={{ fontWeight: "bold", margin: "0px" }}>Wallet</p>
                  <p style={{ color: "#83858A", margin: "0px" }}>
                    Available balance: ₹300
                  </p>
                </div>
              </div>
              <img
                style={{ marginRight: "10px" }}
                src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732707343/ArrowRight_ql45gw.png"
              />
            </div>

            <hr style={{ color: "black", marginTop: "20px" }} />

            <Methods />

            <div className="add-card" >
            <img style={{width:'20px', height:'20px' }} src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732710260/Add_g92uk2.png"/>
            <p>Add Debit Card</p>
            </div>
          </div>
          <div className="proceed-payment">
            <div className="amount-paid">
              <p style={{ color: "#83858A" }}>Amount to be payed</p>
              <p style={{ fontWeight: "bold" }}>₹{totalPrice}</p>
            </div>
            <hr />
            <button className="checkout-btn" onClick={handleClick}>
              Proceed Payment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
