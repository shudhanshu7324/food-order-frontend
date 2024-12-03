import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      name: "Burgers & Fast food",
      restaurants: 21,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_13_lbnrk8.png",
    },
    {
      name: "Salads",
      restaurants: 32,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_15_uybzbj.png",
    },
    {
      name: "Pasta & Casuals",
      restaurants: 6,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_17_lshixu.png",
    },
    {
      name: "Pizza",
      restaurants: 52,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_19_g7mgcb.png",
    },
    {
      name: "Breakfast",
      restaurants: 4,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_21_igdw0h.png",
    },
    {
      name: "Soups",
      restaurants: 32,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732385334/Rectangle_23_ru1kve.png",
    },
  ];

  return (
    <div className="categories-section">
      <h2>Order.uk Popular Categories 🤩</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <h4>{category.name}</h4>
            <p>{category.restaurants} Restaurants</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
