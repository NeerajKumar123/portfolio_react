import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [28.6280, 77.3649]; // Replace with your address's latitude & longitude

  return (
    <div className="w-full h-96 mt-6">
      <MapContainer center={position} zoom={15} className="w-full h-full rounded-lg shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>The Catalyst Softwares</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
