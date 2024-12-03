import React, { useState } from "react";
import EditCardModal from "./EditCardModal";
import AddCardModal from "./AddCardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Mike Ross", cardNumber: "xxxx xxxx xxxx 1234", cvv: "xxx" },
    { id: 2, name: "Mike Ross", cardNumber: "xxxx xxxx xxxx 6789", cvv: "xxx" },
    { id: 3, name: "Mike Ross", cardNumber: "xxxx xxxx xxxx 3468", cvv: "xxx" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const [isAdding, setIsAdding] = useState(false);

  const handleEditClick = (card) => {
    setCurrentCard(card); // Set the card to be edited
    setIsModalOpen(true); // Open modal
  };

  const handleSaveCard = (newCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === newCard.id ? newCard : card))
    );
    setIsModalOpen(false); // Close modal after saving
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]); // Add the new card
    setIsAdding(false); // Close the add card modal
  };

  return (
    <div className="saved-cards">
      <p style={{ fontSize: "20px", fontWeight: "500" }}>
        Saved Payment Methods
      </p>
      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="card-info">
            <img
              src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732761722/Frame_100_1_odaxol.png"
              alt="card"
            />
            <div className="card-item">
              <p>{card.cardNumber}</p>
              <p>{card.name}</p>
            </div>
            <div className="edit-card" onClick={() => handleEditClick(card)}>
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        ))}
        <div className="add-card" onClick={() => setIsAdding(true)}>
          <img
            src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732727624/Frame_100_q23rgk.png"
            alt="Add"
          />
          <p>Add New Card</p>
        </div>
      </div>

      {/* Modal for Editing a Card */}
      {isModalOpen && (
        <EditCardModal
          card={currentCard}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveCard}
        />
      )}

      {/* Modal for Adding a New Card */}
      {isAdding && (
        <AddCardModal
          onClose={() => setIsAdding(false)}
          onSave={handleAddCard}
        />
      )}
    </div>
  );
};

export default PaymentMethods;
