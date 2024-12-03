import MenuCard from "./MenuCard";

const Burger = ({ addToCart }) => {
  const burgers = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      price: 120,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png",
      ingredient: "1 beef patty, cheese, lettuce, pickles, special sauce",
    },
    {
      id: 2,
      name: "Royal Cheese Burger",
      price: 120,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png",
      ingredient:
        "Grilled veggie patty, lettuce, tomato, cheese, whole-grain bun",
    },
    {
      id: 3,
      name: "The classics for 3",
      price: 120,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png",
      ingredient:
        "Crispy chicken patty, spicy mayo, lettuce, tomato, sesame bun",
    },
    {
      id: 4,
      name: "Bacon BBQ Burger",
      price: 120,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_2_dwmmok.png",
      ingredient:
        "Beef patty, bacon, BBQ sauce, cheese, onion rings, brioche bun",
    },
  ];
  return (
    <div className="categories-section">
      <h2 style={{ fontSize: "30px" }}>Burgers</h2>
      <div className="categories-container">
        {burgers.map((burger) => (
          <MenuCard key={burger.id} item={burger} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Burger;
