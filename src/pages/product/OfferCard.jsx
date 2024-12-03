
import { AddCart } from './AddCart.jsx'
import offers from './offers.js'


const OfferCard = () => {
  return (
    <div className='deals-section'>
        <div className="deals-container">
        {offers.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <AddCart className="add-to-cart"/>
            <div className="discount">{deal.discount}</div>
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <div className="deal-info">
              <p>McDonald’s East London</p>
              <h4>{deal.name}</h4>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfferCard