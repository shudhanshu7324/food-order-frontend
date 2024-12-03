import { AddCart } from "../AddCart";
import "./MenuCard.css";

const MenuCard = ({ item,addToCart }) => {
  if (!item) return null; // Return null if item is undefined
  return (
    <div className="item-card" >
      <div className="item-detail">
        <h4>{item.name}</h4>
        <p>{item.ingredient}</p>
        <h4 style={{marginTop:'5px'}}> ₹ {item.price}</h4>
      </div>
      <div className="item-image">
        <div className="item-image-container">
          <img  src={item.image}/>
          <AddCart addToCart={addToCart} item={item} className="add-item"/>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

