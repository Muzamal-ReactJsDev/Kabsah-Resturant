import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import img from "../../Images/Placeholder.png";

const icon = L.icon({
  iconUrl: img,
  iconSize: [38, 38],
});

const position = [51.505, -0.09];
function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat || 0, selectPosition?.lon || 0),
        map.getZoom(),
        { animate: true }
      );
    }
  }, [selectPosition]);

  return null;
}
export default function Map(props) {
  const { selectPosition } = props;
  const locationSelection = [
    selectPosition?.lat || 0,
    selectPosition?.lon || 0,
  ];

  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=QUukrhDSPM4HckU40Pcn"
      />

      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
