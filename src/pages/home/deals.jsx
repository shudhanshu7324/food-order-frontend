import { useState, useEffect } from "react";
import "./deals.css";

const DealsSection = () => {

  return (
    <div className="deals-section">
      <div className="top">
      <h2>
        Up to -40% 🎊 Order.uk exclusive deals
      </h2>
      <div className="categories">
        <button>Vegan</button>
        <button>Sushi</button>
        <button className="active">Pizza & Fast food</button>
        <button>Others</button>
      </div>
      </div>
      <div className="deals-container">
          <div className="deal-card" >
            <div className="discount">-40%</div>
            <img src="rectangle1.png" alt="rectangle1" className="deal-image" />
            <div className="deal-info">
              <p>Restaurant</p>
              <h4>Chef Burgers London</h4>
            </div>
          </div>

          <div className="deal-card" >
            <div className="discount">-20%</div>
            <img src="rectangle2.png" alt="rectangle1" className="deal-image" />
            <div className="deal-info">
              <p>Restaurant</p>
              <h4>Grand Ai Cafe London</h4>
            </div>
          </div>

          <div className="deal-card " >
            <div className="discount">-17%</div>
            <img src="rectangle1.png" alt="rectangle1" className="deal-image" />
            <div className="deal-info">
              <p>Restaurant</p>
              <h4>Butterbrot Caf’e London</h4>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DealsSection;
