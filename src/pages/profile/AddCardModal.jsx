import React, { useState } from "react";

const AddCardModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    name: "",
    cvv: "",
    expiration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: Date.now() }); // Pass new card data with a unique ID
    setFormData({ cardNumber: "", name: "", cvv: "", expiration: "" }); // Reset form
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Add New Card</p>
        <form onSubmit={handleSubmit}>
          <div className="card-info-edit">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>Expiration</label>
            <input
              type="text"
              name="expiration"
              value={formData.expiration}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              required
            />
          </div>
          <div className="card-info-edit">
            <label>Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Cardholder Name"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
