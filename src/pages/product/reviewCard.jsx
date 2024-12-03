import Profile from "./profile.png";
import Time from "./Time.png";
import "./reviews.css";

const ReviewCard = () => {
  return (
    <div className="cards">
    <div className="review-profile">
      <div className="profile-data">
        <img
          src={Profile}
          style={{ height: "60px", width: "60px", borderRadius: "50%" }}
        />
        <div className="reviewer-location">
          <p style={{ fontWeight: "bold", margin: "0" }}>St Glx</p>
          <p style={{ color: "#FC8A06", margin: "0" }}>South London</p>
        </div>
      </div>
      <div className="date-and-rate">
        <div style={{textAlign:'end',fontSize:'18px',padding:'0'}} className="stars">★★★★★</div>
        <div className="review-date" >
          <img style={{ height: "20px", width: "20px", borderRadius: "50%" }} src={Time} />
          <p>24th September, 2023</p>
        </div>
      </div>
    </div>
    <div className="review-data">
    <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald&apos;s standard – hot and satisfying.</p>
    </div>
  </div>
  )
}

export default ReviewCard