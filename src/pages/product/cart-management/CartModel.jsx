import "./CartModel.css";
import Share from "./Share.png";
import Basket from "./Basket.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartModel = ({
  cartItems,
  removeFromCart,
  subtotal,
  discount,
  deliveryFee,
  total,
  isCartOpen,
  toggleCart,
}) => {
  if (!cartItems) return null;
  const cardEmpty = cartItems.length === 0 ? true : false;

  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(cartItems); 
    if (cardEmpty || total < 199) {
      toast.error(`Minimum delivery is  ₹199, You must Spend ₹${199-total} more for the checkout!`, {
        duration: 3000, // Optional: how long the toast will appear (in ms)
      });
      e.preventDefault();
      console.log("Card is empty, showing toast...");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className={`cart-banner ${isCartOpen ? "open" : ""}`}>
      <div className="share-cart">
        <div className="share-btn">
          <img src={Share} />
          <p>Share this cart with your friends</p>
        </div>
        <div className="copy-link">
          <button>Copy Link</button>
        </div>
      </div>

      <div className="cart-header">
        <img src={Basket} />
        <p>My Basket</p>
      </div>
      {cardEmpty ? (
        <p style={{ padding: "1rem" }}>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <Card key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
        </div>
      )}
      {!cardEmpty && (
        <>
          <div className="cart-summary">
            <div className="amount-calc">
              <div className="extra-amount">
                <h4>Sub Total :</h4>
                <span style={{ fontSize: "18px" }}>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="extra-amount">
                <h4>Discount :</h4>
                <span style={{ fontSize: "18px" }}>
                  -₹{discount.toFixed(2)}
                </span>
              </div>

              <div className="extra-amount">
                <h4>Delivery Fee : </h4>
                <span style={{ fontSize: "18px" }}>
                  ₹{deliveryFee.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="total-amount">
              <h4 style={{ margin: "0px" }}>Total to pay</h4>
              <span style={{ fontSize: "20px", fontWeight: "500" }}>
                ₹{total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="promotions">
            <p>Choose your free item..</p>
            <img
              style={{ width: "30px", height: "30px" }}
              src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732775751/Forward_Button_4_rcr9fv.png"
            />
          </div>

          <div className="promotions">
            <p>Apply Coupon Code here</p>
            <img
              style={{ width: "30px", height: "30px" }}
              src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732776122/Forward_Button_5_sui8es.png"
            />
          </div>

          <div
            style={{
              backgroundColor: "#CCCCCC",
              width: "100%",
              height: "1px",
              margin: "14px 0px",
            }}
          />

          <div className="delivery-collection">
            <div className="delivery">
              <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732777493/Delivery_Scooter_yoqnd1.png" />
              <p>Delivery</p>
              <p>Starts at 17:50</p>
            </div>

            <div className="collection">
              <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732777493/New_Store_akysvw.png" />
              <p>Collection</p>
              <p>Starts at 16:50</p>
            </div>
          </div>
        </>
      )}

      <button
       
        className="checkout-button"
        onMouseDown={handleClick}
       style={{ backgroundColor: cardEmpty ? "#FFB1B1" : "" }}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} size="2x"/>
        <span style={{ width: "80%", fontSize: "18px" }}>Checkout</span>
      </button>
    </div>
  );
};

export default CartModel;
