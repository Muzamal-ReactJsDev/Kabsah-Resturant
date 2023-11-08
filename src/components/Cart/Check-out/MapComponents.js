import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponents = ({ onLocationSelect, latitude, longitude }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px", // Adjust the height as needed
  };

  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const handleMapClick = (e) => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    // Call the parent component's callback function with the selected location
    onLocationSelect({ latitude, longitude });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={17}
        onClick={handleMapClick}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponents;
