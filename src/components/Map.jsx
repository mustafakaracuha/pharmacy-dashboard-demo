import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Marker Icon
import iconMarker from "../assets/images/pharm.svg";
import iconRetina from "../assets/images/pharm.svg";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

export default function Map() {
  const { pharmList, selectedPharm } = useSelector((state) => state.pharm);
  const [position, setPosition] = useState({
    lat: selectedPharm.latitude
      ? selectedPharm.latitude
      : pharmList[0].latitude,
    lng: selectedPharm.longitude
      ? selectedPharm.longitude
      : pharmList[0].longitude,
  });
  const animateRef = useRef(false);

  useEffect(() => {
    setPosition({ lat: selectedPharm.latitude, lng: selectedPharm.longitude });
    animateRef.current = !animateRef.current;
  }, [selectedPharm]);

  const Selected = ({ lat, lng, animateRef }) => {
    const map = useMap();

    map.setView([lat, lng], map.getZoom(), {
      animate: animateRef.current || false,
    });

    return null;
  };

  return (
    <div className="rounded-2xl overflow-hidden mt-16">
      <MapContainer
        animateRef={animateRef}
        center={position}
        zoom={13}
        className="lg:h-[200px] 2xl:h-[300px]"
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker style={{ width: "20px" }} position={position} icon={icon}>
          <Popup>
            {selectedPharm.title} <br /> {selectedPharm.adress}
          </Popup>
        </Marker>
        <Selected
          lat={position.lat}
          lng={position.lng}
          animateRef={animateRef}
        />
      </MapContainer>
    </div>
  );
}
