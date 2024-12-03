// McDonalds.jsx
import React from "react";
import { Clock, Search, Bike } from "lucide-react";
import "./McDonalds.css";
import complete from "./complete.png";

const McDonaldsHeader = () => {
  return (
    <div className="header-container">
      {/* Dark header section */}
      <div className="main-header">
        <div className="header-content">
          {/* Top text */}
          <p className="tagline">I'm lovin' it!</p>

          {/* Restaurant name */}
          <h1 className="restaurant-name">McDonald's East London</h1>

          {/* Info badges */}
          <div className="info-badges">
            <div className="badge">
              <img style={{ width: "20px", height: "20px" }} src={complete} />
              <span>Minimum Order: 199 Rs</span>
            </div>
            <div className="badge">
              <Bike size={20} />
              <span>Delivery in 20-25 Minutes</span>
            </div>
          </div>
        </div>

        {/* Rating card */}

        <div className="rating-info">
          <div className="rating-number">3.4</div>
          <div className="stars">★★★☆☆</div>
          <div className="review-count">1,360 reviews</div>
        </div>

        <div className="rating-card">
          <img
            src={
              "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732459959/Rectangle_44_vue7ti.png"
            }
            alt="McDonald's burger and fries"
            className="food-image"
          />
        </div>
      </div>
      {/* Bottom section */}
      <div className="bottom-section">
        <div className="opening-hours">
          <Clock size={20} className="clock-icon" />
          <span>Open until 3:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default McDonaldsHeader;
