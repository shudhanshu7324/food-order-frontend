import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="homepage-banner">
        <div className="banner-content">
          <p className="banner-para">
            Order Restaurant food, takeaway and groceries.
          </p>
          <p className="banner-heading">
            Feast Your Senses,
            <br /> <span>Fast and Fresh</span>
          </p>
          <div>
            <p className="pincode-para">
              Enter a postcode to see what we deliver
            </p>
            <div>
              <input type="text" placeholder="e.g. EC4R 3TE" />
              <button>Search</button>
            </div>
          </div>
        </div>
        <img className="orange" src="orange.png" alt="orange" />
        <img className="untitled2" src="untitled2.png" alt="untitled" />
        <img className="untitled1" src="untitled1.png" alt="untitled" />
        <Notification
          content1={"We’ve Received your order!"}
          content2={"Awaiting Restaurant acceptance"}
          className="notification1"
        />
        <Notification
          content1={"Order Accepted! ✅"}
          content2={"Your order will be delivered shortly"}
          className="notification2"
        />
        <Notification
          content1={"Your rider's nearby🎉"}
          content2={"They're almost there-get ready!"}
          className="notification3"
        />
        <div className="one font">1</div>
        <div className="two font">2</div>
        <div className="three font">3</div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
