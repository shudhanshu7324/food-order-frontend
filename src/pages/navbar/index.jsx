import { useState } from "react";
import loc from "../../assets/images/Location.png";

import "./navbar.css";
import { Cart } from "../cart/cart";


const Navbar = ({ isCartOpen, toggleCart }) => {
  const [location, setLocation] = useState("Regent Street, A4, A4201, London ");
  const [isEditing, setIsEditing] = useState(false);
  const [newLocation, setNewLocation] = useState(location);

  const handleSave = () => {
    setLocation(newLocation);
    setIsEditing(false);
  };

  return (
    <header className="top-navbar">
      <span className="naming">
        🌟 Get 5% Off your first order,<span className="cl">Promo: ORDER5</span>
      </span>
      <div className="location-container">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <>
            <img src={loc} alt="Location Icon" />
            <span>
              {location}{" "}
              <span
                onClick={() => setIsEditing(true)}
                style={{ color: "#FC8A06", textDecoration: "underline" }}
              >
                change location
              </span>
            </span>
          </>
        )}
      </div>
<Cart isCartOpen={isCartOpen} toggleCart={toggleCart}/>
    </header>
  );
};

export default Navbar;
