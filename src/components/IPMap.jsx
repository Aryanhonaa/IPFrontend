import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export const IPMap = ({ loc }) => {
  if (!loc) return null;

  const [lat, lng] = loc.split(",").map(Number);

  if (typeof window === "undefined") return null;

  // Inner component for updating map view
  const MapUpdater = () => {
    const map = useMap();

    useEffect(() => {
      if (lat && lng) {
        map.flyTo([lat, lng], 10, {
          animate: true,
        });
      }
    }, [lat, lng, map]);

    return null;
  };

  return (
    <div className="h-96 w-full rounded-xl overflow-hidden mt-4">
      <MapContainer
        center={[lat, lng]}
        zoom={10}
        className="h-full w-full"
        key={`${lat}-${lng}`} // ensures proper refresh when IP changes
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🔥 updates map when IP changes */}
        <MapUpdater />

        <Marker position={[lat, lng]}>
          <Popup>
            IP Location: {lat}, {lng}
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};