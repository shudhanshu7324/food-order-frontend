import "./reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./reviewCard";


const Reviews = () => {
  return (
    <div className="review-section">
      <div className="review-title">
        <h2>Customer Reviews</h2>
        <div className="icon-container">
          <div className="circular-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="circular-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="review-card-container">
       <ReviewCard/>
       <ReviewCard/>
       <ReviewCard/>
       <div className="rating-review">
        <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732641007/Rating_hchh84.png"/>
       </div>
      </div>
    </div>
  );
};

export default Reviews;
