import "./information.css";
import Clock from "./Clock.png"
import Tracking from "./Tracking.png"
import ID from "./ID.png"

const Information = () => {
  return (
    <div className="information-section">
      <div className="delivery-info">
      <div className="info-title"><img className="clock" src={Tracking}/><h2>Delivery information</h2></div>
        <p>
          <span style={{ fontWeight: "bold" }}>Monday:</span> 12:00 AM–3:00 AM,
          8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Friday:</span>8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Sunday:</span> 8:00 AM–12:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>
            Estimated time until delivery:
          </span>{" "}
          20 min
        </p>
      </div>
      <div className="contact-info">
      <div className="info-title"><img className="clock" src={ID}/><h2>Contact information</h2></div>
        <p>
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.
        </p>
        <p style={{ fontWeight: "bold" }}>Phone number</p>
        <p>+934443-43</p>
        <p style={{ fontWeight: "bold" }}>Website</p>
        <p>http://mcdonalds.uk/</p>
      </div>
      <div className="operational-time">
        <div className="info-title"><img className="clock" src={Clock}/><h2>Operational Times</h2></div>
        <p>
          <span style={{ fontWeight: "bold" }}>Monday:</span> 12:00 AM–3:00 AM,
          8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Friday:</span>8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Sunday:</span> 8:00 AM–3:00 AM
        </p>
      </div>
    </div>
  );
};

export default Information;
