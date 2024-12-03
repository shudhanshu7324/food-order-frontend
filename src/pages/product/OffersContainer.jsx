import { Search} from "lucide-react";

const OffersContainer = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-title">All Offers from McDonald&apos;s East London</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search from menu..."
          className="search-input"
        />
        <Search size={16} className="search-icon" />
      </div>
    </div>
  );
};

export default OffersContainer;
