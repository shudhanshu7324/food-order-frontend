import "./header.css";
import Logo from "../../assets/images/LOGO 1.png";
import user from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate=useNavigate()
  const handleClick = ()=>{
    navigate("/profile")
  }
  return (
    <div className="header-nav">
      <div className="logo">
        <img style={{width:'150px'}} src={Logo} />
      </div>
      <div className="buttons">
        <button className="default-selected">
          Home
        </button>
        <button>Browse Menu</button>
        <button>Special Offers</button>
        <button>Restaurants</button>
        <button>Track Order</button>
      </div>
      <div className="profile" onClick={handleClick}>
        <img  src={user} />
        <span>Hey {localStorage.getItem("username").split(" ")[0]}</span>
      </div>
    </div>
  );
};

export default Header;
