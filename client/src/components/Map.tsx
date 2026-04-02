import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { type Location } from "../types/location";

type Props = {
  locations: Location[];
  onSelectLocation: (location: Location) => void;
};

export default function Map({ locations, onSelectLocation }: Props) {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%", position: "relative" }}>
      <MapContainer
        center={userLocation ?? [43.1566, -77.6088]} // Rochester fallback
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.latitude, loc.longitude]}
            eventHandlers={{
              click: () => onSelectLocation(loc),
            }}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>

      <button
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        Report Location
      </button>

      <button
        style={{
          position: "absolute",
          bottom: 70,
          right: 20,
          zIndex: 1000,
        }}
      >
        My Location
      </button>
    </div>
  );
}