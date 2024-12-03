import icon from "./arrow.png";
import cart from "../../assets/images/cart.png";


export const Cart = ({ isCartOpen, toggleCart }) => {
 
  return (
    <div onClick={toggleCart} className="cart-div">
    <div  className="cart-btn" style={{ cursor: "pointer", "width":"110px" }}>
      <img
        style={{ height: "30px", width: "30px", marginLeft: "1rem" }}
        src={cart}
        alt="Cart"
      />
      My Cart
    </div>
    <div style={{"width":"100px", "height":"100%", "borderLeft":"1px solid #FFFFFF","borderRight":"1px solid #FFFFFF", "marginRight":"-70px"}}></div>
    <img
      className="arrow"
      style={{ height: "30px", width: "30px", margin: "12px 1.25rem" }}
      src={icon}
    />
    
  </div>
  )
}
