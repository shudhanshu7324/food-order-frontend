import React from "react";

const Methods = () => {
  return (
    <div className="payment-options">
      <div className="wallet" style={{padding:'0.5rem'}}>
        <div className="left-wallet">
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732707995/Matercard_fcsfsl.png" />
          <span className="payment-text">MaestroKard</span>
        </div>
        <input type="radio" name="paymentMethod" value="creditCard" />
      </div>
      <div className="wallet" style={{padding:'0.5rem'}}>
        <div className="left-wallet">
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732707995/PayPal_rqp5lm.png" />
          <span className="payment-text">PayPal</span>
        </div>
        <input type="radio" name="paymentMethod" value="creditCard" />
      </div>
      <div className="wallet" style={{padding:'0.5rem'}}>
        <div className="left-wallet">
          <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732707995/Stripe_oqpm8z.png" />
          <span className="payment-text">Stripe</span>
        </div>
        <input type="radio" name="paymentMethod" value="creditCard" />
      </div>
      
    </div>
  );
};

export default Methods;
