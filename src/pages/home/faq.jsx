import "./faq.css";

const Faq = () => {
  const faqs = [
    {
      title: "Place an Order!",
      image: "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732556077/order-food_1_1_gfjlo9.png",
      para: "Place order through our website or Mobile app",
    },
    {
      title: "Track Progress",
      image: "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732556077/food_1_1_yg6j9l.png",
      para: "Your can track your order status with delivery time",
    },
    {
      title: "Get your Order",
      image: "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732556077/order_1_1_yio461.png",
      para: "Receive your order at alighting fast speed!",
    },
  ];
  return (
    <div className="faq-section">
      <div className="faq-heading">
        <h2>Know more about us!</h2>
        <div className="faq-menu">
          <button className="active-btn">Frequent Questions</button>
          <button>Who we are?</button>
          <button>Partner Program</button>
          <button>Help & Support</button>
        </div>
      </div>
      <div className="steps-container" style={{"borderRadius":"10px"}}>
        <div className="left-faqs">
          <p className="active-faq">How does Order.UK work?</p>
          <p>What payment methods are accepted?</p>
          <p>Can I track my order in real-time?</p>
          <p>Are there any special discounts or promotions available?</p>
          <p>Is Order.UK available in my area?</p>
        </div>
        <div className="right-faqs">
          <div className="steps">
            {faqs.map((faq, index) => {
              return <div className="faq-card" key={index}>
                <p style={{fontWeight:"bold"}}>{faq.title}</p>
                <img src={faq.image} alt="" />
                <p style={{margin:"0px 25px"}}>{faq.para}</p>
              </div>;
            })}
            <p style={{"width":"600px","textAlign":"center","fontSize":"13px","margin":"auto"}}>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
