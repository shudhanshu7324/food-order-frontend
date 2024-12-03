import MenuCard from "./MenuCard";

const Fries = ({ addToCart }) => {
  const fries = [
    {
      id: 1,
      name: "Classic French Fries",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_1_gar709.png",
      ingredient: "Golden crispy fries with a hint of salt",
    },
    {
      id: 2,
      name: "Cheese Fries",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_3_u0hbbm.png",
      ingredient: "Fries topped with melted cheddar cheese",
    },
    {
      id: 3,
      name: "Chili Garlic Fries",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_5_jqsa3y.png",
      ingredient: "Fries drizzled with chili garlic sauce",
    },
    {
      id: 4,
      name: "Curly Fries",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_4_yueunn.png",
      ingredient: "Spiral-cut seasoned fries",
    },
  ];

  return (
    <div className="categories-section">
      <h2 style={{ color: "#FC8A06", fontSize: "30px" }}>Fries</h2>
      <div className="categories-container">
        {fries.map((fry) => (
          <MenuCard key={fry.id} item={fry} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Fries;
