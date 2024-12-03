import MenuCard from "./MenuCard";
const ColdDrinks = ({ addToCart }) => {
  const coldDrinks = [
    {
      id: 1,
      name: "Classic Cola",
      price: 40,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_6_isdcrj.png",
      ingredient: "Refreshing cola served chilled",
    },
    {
      id: 2,
      name: "Lemonade Fizz",
      price: 40,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_7_ou7ug9.png",
      ingredient: "Sparkling lemonade with a zesty twist",
    },
    {
      id: 3,
      name: "Orange Blast",
      price: 40,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_8_ygz8gz.png",
      ingredient: "Orange-flavored fizzy drink",
    },
    {
      id: 4,
      name: "Iced Tea",
      price: 40,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_9_ebidd2.png",
      ingredient: "Chilled sweet tea with a hint of lemon",
    },
  ];

  return (
    <div className="categories-section">
      <h2 style={{ color: "#FC8A06", fontSize: "30px" }}>Cold Drinks</h2>
      <div className="categories-container">
        {coldDrinks.map((drink) => (
          <MenuCard key={drink.id} item={drink} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ColdDrinks;
