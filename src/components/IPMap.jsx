import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export const IPMap = ({ loc }) => {
  if (!loc || typeof loc !== "string") return null;

  const [lat, lng] = loc.split(",").map(Number);

  if (typeof window === "undefined") return null;

  const MapUpdater = ({ lat, lng }) => {
    const map = useMap();
  
    useEffect(() => {
      if (!lat || !lng) return;
  
      map.flyTo([lat, lng], 18, {
        animate: true,
        duration: 1.5,
      });
    }, [lat, lng, map]);
  
    return null;
  };

  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[lat, lng]}
        zoom={2}
        className="h-full w-full"
        key={`${lat}-${lng}`}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        zoomControl={false}
        keyboard={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MapUpdater lat={lat} lng={lng} />

        <Marker position={[lat, lng]}>
          <Popup>IP Location: {lat}, {lng}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};