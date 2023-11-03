// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const MapComponents = ({ latitude, longitude }) => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "300px", // Adjust the height as needed
//   };

//   const center = {
//     lat: parseFloat(latitude),
//     lng: parseFloat(longitude),
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
// center={center}
//         zoom={15} // Adjust the zoom level as needed
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponents;

// MapComponents.js

// this is for the name but this is giving lat and long....

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponents = ({ onLocationSelect, latitude, longitude }) => {
  // ... (existing code)
  const mapContainerStyle = {
    width: "100%",
    height: "300px", // Adjust the height as needed
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
        zoom={15}
        onClick={handleMapClick}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponents;
