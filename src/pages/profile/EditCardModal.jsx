import React, { useState } from "react";
import "./profile.css";

const EditCardModal = ({ card, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: card.id,
    name: card.name,
    cardNumber: card.cardNumber,
    expiration: card.expiration,
    cvv: card.cvv,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated card
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Edit Payment Method</p>
        <form onSubmit={handleSubmit}>
          <div className="card-info-edit">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>Expiration</label>
            <input
              type="text"
              name="name"
              value={formData.expiration}
              onChange={handleChange}
              placeholder="Card Expiration"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>CVV</label>
            <input
              type="text"
              name="name"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="Card CVV"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>Name on card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Cardholder Name"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
