import React from "react";
import Map from "./Map";
function MapComponent({ selectPosition }) {
  return (
    <>
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          width: "100%",
          height: "50vh",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Map selectPosition={selectPosition} />
        </div>
      </div>
    </>
  );
}

export default MapComponent;
