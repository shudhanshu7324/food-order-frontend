import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from "leaflet";
import PreviousLocation from "./PreviousLocation.png"



    // Create a circular div with an image inside
    const customDivIcon = L.divIcon({
      className: "custom-div-icon", // Optional: Add a custom class for styling
      html: `
        <div style="
          background-color: #03081F;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          text-align:center;
        ">
          <img src=${PreviousLocation}
               alt="Custom Icon"
               style="width: 70%; height: 70%; object-fit: cover; margin-top:6px" />
        </div>
      `,
      iconSize: [50, 50], // Size of the icon
      iconAnchor: [25, 50], // Anchor point for positioning
      popupAnchor: [0, -50], // Popup position relative to the icon
    });



const MapComponent = () => {
  return (
    <div className="map-container" style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[51.505, -0.09]} // Default center of the map [latitude, longitude]
        zoom={13} // Initial zoom level
        style={{ height: "100%", width: "100%" }}
      >
        {/* Tile Layer for map display */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Add a marker */}
        <Marker position={[51.505, -0.09]} icon={customDivIcon}>
          <Popup>
          <div >
              <h4>McDonald’s</h4>
              <p>South London</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Overlay Container (on top of the map) */}
      <div className="overlay-container">
        <div className="overlay-content">
          <h2 style={{marginBottom:'0px'}}>McDonald’s</h2>
          <p style={{color:'#FC8A06',marginTop:'0px',marginBottom:'10px'}}>South London</p>
          <p style={{marginTop:'35px'}}>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
          <h5 style={{marginBottom:'0px'}}>Phone number</h5>
          <p style={{color:'#FC8A06',marginTop:'0px'}}>+934443-43</p>
          <h5 style={{marginBottom:'0px'}}>Website</h5>
          <p style={{color:'#FC8A06',marginTop:'0px'}}>http://mcdonalds.uk/</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
