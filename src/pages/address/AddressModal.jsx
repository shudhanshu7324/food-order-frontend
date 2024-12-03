import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AddressModal = ({onClose, onSave,initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullAddress: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

    //Editing: Populate form fields with initial data 
    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      }
    }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); 
    onSave(formData); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="add-address">
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{initialData?._id ? "Edit Address" : "Add Address"}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="update-address">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="pincode"
            placeholder="Pin Code"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          </div>
          <textarea
            name="fullAddress"
            placeholder="Full Address"
            value={formData.fullAddress}
            onChange={handleChange}
            required
          ></textarea>
         
          <div className="modal-click">
            <button type="button" onClick={onClose} className="cancel-address">
              Cancel
            </button>
            <button type="submit" className="save-address">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
