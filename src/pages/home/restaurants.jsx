import "./Restaurant.css";
import {useNavigate} from "react-router-dom"

const Restaurant = ({title}) => {
  const popularRestaurants = [
    {
      name: "McDonald’s London ",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546279/Rectangle_13_1_kjahpf.png",
    },
    {
      name: "Papa Johns",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546279/Rectangle_13_2_pujwzc.png",
    },
    {
      name: "KFC West London",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546279/Rectangle_13_3_qdqxbi.png",
    },
    {
      name: "Texas Chicken",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546348/Rectangle_13_4_qyquet.png",
    },
    {
      name: "Burger King",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546347/Rectangle_13_5_sjm3za.png",
    },
    {
      name: "Shaurma 1",
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732546348/Rectangle_13_6_ksnsvz.png",
    },
  ];

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/product");
  }

  return (
    <div className="unique-categories-section">
      <h2>{title}</h2>
      <div className="unique-categories-container">
        {popularRestaurants.map((restaurant, index) => (
          <div onClick={handleClick} className="unique-category-card" key={index}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="unique-category-image"
            />
            <h4>{restaurant.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
