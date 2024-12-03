import React from "react";
import "./card.css";

const Cards = () => {
  const cardData = [
    {
      badge: "Earn more with lower fees",
      title: "Partner with us",
      description: "Signup as business",
      button: "Get Started",
      image: "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732550436/Group_8_ffdrtd.png", // Replace with your image URL
    },
    {
      badge: "Avail exclusive perks",
      title: "Ride with us",
      description: "Signup as rider",
      button: "Get Started",
      image: "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732550435/Rectangle_8_mjwrd9.png", // Replace with your image URL
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index} style={{ backgroundImage: `url(${card.image})` }}>
            <div className="gradientov"></div>
          <div className="card-badge">{card.badge}</div>
          <div className="card-content">
          <p style={{color:'#FC8A06'}}>{card.description}</p>
            <h1>{card.title}</h1>
            
            <button className="btn">{card.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
