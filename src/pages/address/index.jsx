import { useState, useEffect } from "react";
import "./address.css";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AddressModal from "./AddressModal";
import {
  getAddresses,
  createAddress,
  deleteAddress,
  updateAddress,
} from "../../services";

const Address = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/checkout");
  };

  const [addresses, setAddresses] = useState([]);

  const [editingAddress, setEditingAddress] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const data = await getAddresses(token);
        if (data && !data.message) {
          setAddresses(data);
        } else {
          console.error("Error fetching addresses:", data.message);
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, [token]);

  // Open the modal for editing
  const handleEdit = (address) => {
    setEditingAddress(address); // Set the address to be edited
    setIsModalOpen(true);
  };

  // Function to handle adding a new address
  const handleSave = async (newAddress) => {
    try {
      if (editingAddress) {
        // Update existing address
        const updatedAddress = await updateAddress(
          editingAddress._id,
          newAddress,
          token
        );
        setAddresses((prev) =>
          prev.map((address) =>
            address._id === editingAddress._id ? updatedAddress : address
          )
        );
      } else {
        const savedAddress = await createAddress(newAddress, token);
        console.log("Saved address:", savedAddress); // Log API response
        setAddresses((prev) => [...prev, savedAddress]);
        setIsModalOpen(false);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await deleteAddress(id, token);
      setAddresses((prev) => prev.filter((address) => address._id !== id));
    } catch (error) {
      console.error("Error removing address:", error);
    }
  };

  return (
    <>
      <div className="address-page">
        <Navbar />
        <Header />
        <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading">
            <h2>Your Addresses</h2>
          </div>
        </div>

        <div className="address">
          <div className="address-list">
            <div
              className="add-address-card"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="add-address">
                <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732727624/Frame_100_q23rgk.png" />
                <p>Add Address</p>
              </div>
            </div>
            {addresses.map((address) => (
              <div key={address.id} className="address-card">
                <h3>{localStorage.getItem("username")}</h3>
                <p>
                  {address.fullAddress} {address.city} {address.state}{" "}
                  {address.pincode} India
                </p>
                <p>Phone Number: {address.phone}</p>
                {address.isDefault && (
                  <button className="default-tag">Default</button>
                )}
                <div className="actions">
                  <button className="edit-button" onClick={() => handleEdit(address)}>
                    Edit
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(address._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <AddressModal
          onClose={() => {
            setEditingAddress(null); // Clear the editing state when closing
            setIsModalOpen(false);
          }}
            onSave={handleSave}
            initialData={editingAddress}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Address;
