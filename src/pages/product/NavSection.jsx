import { useState,useEffect } from "react";
import "./NavSection.css";

const NavSection = ({ className }) => {
  const buttonLabels = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    " Cold drinks",
    " Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];

  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    setActiveButton(0); // Set the first button as active when component mounts
  }, []);

  return (
    <div className={className}>
      <div className="food-nav">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveButton(index)} // Update active button on click
            className={activeButton === index ? "focused" : ""} // Add focused class if active
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavSection;
