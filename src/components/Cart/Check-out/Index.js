// import React, { useState, useEffect } from "react";
// import "./Index.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "../../Header/Index";
// import { Col, Container, Row } from "react-bootstrap";
// import MapComponents from "./MapComponents";

// function Index() {
//   const checkout = "Checkout";
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [cardInfo, setCardInfo] = useState({
//     contact_person_name: "",
//     address_type: "",
//     contact_person_number: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCardInfo({
//       ...cardInfo,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
// const token = localStorage.getItem("token");
// if (!token) {
//   console.error("Token not available. Please authenticate.");
//   return;
// }
// setIsLoading(true);

// const response = await axios.get(
//   `https://maps.googleapis.com/maps/api/geocode/json?address=${cardInfo.address}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
// );

// if (response.data.results.length > 0) {
//   const location = response.data.results[0].geometry.location;
//   const updatedCardInfo = {
//     ...cardInfo,
//     latitude: location.lat,
//     longitude: location.lng,
//   };

//   // Create the addressData object with updated latitude and longitude
//   const addressData = updatedCardInfo;

//   console.log("Updated Address Data:", addressData);

//   const addressResponse = await fetch(
//     "https://cafescale.com/api/v1/customer/address/add",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(addressData),
//     }
//   );

//         if (addressResponse.ok) {
//           console.log("Address Added successfully", addressResponse);
//           alert("Address Added successfully");
//           setIsLoading(false);
//           // navigate("/ShowAddAddress");
//     } else {
//       console.error("Error Adding Address");
//       alert("Error Adding Address");
//       setIsLoading(false);
//     }
//   } else {
//     console.error("Unable to fetch coordinates for the provided address");
//     alert("Unable to fetch coordinates for the provided address");
//   }
// } catch (error) {
//   console.error("Error:", error);
//   alert("Error:", error);
//   setIsLoading(false);
// }
//   };

//   return (
//     <>
//       <div>
//         <Header checkout={checkout} />{" "}
//       </div>
//       <br />
//       <br />
//       <br />
//       <Container>
//         <Row>
//           <Col md={6}>
//             <MapComponents
//               latitude={cardInfo.latitude}
//               longitude={cardInfo.longitude}
//             />
//           </Col>
//           <Col md={6}>
//             <div className="payment-form-container">
//               <h1>Delivery Address</h1>

//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label>Address Line</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address"
//                     value={cardInfo.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Address Type</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address_type"
//                     value={cardInfo.address_type}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label>Contact Person Name</label>
//                   <input
//                     type="text"
//                     name="contact_person_name"
//                     className="input-field input-field-payment"
//                     value={cardInfo.contact_person_name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <div>
//                     <label>Contact Person Number</label>
//                     <input
//                       type="text"
//                       name="contact_person_number"
//                       className="input-field input-field-payment"
//                       value={cardInfo.contact_person_number}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="submit-button"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting...." : " Save Location"}
//                 </button>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Index;

// here i use the Map api to mark the Location.......

// import React, { useState } from "react";
// import "./Index.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "../../Header/Index";
// import { Col, Container, Row } from "react-bootstrap";
// import MapComponents from "./MapComponents";

// function Index() {
//   const checkout = "Checkout";
//   // const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [cardInfo, setCardInfo] = useState({
//     contact_person_name: "",
//     address_type: "",
//     contact_person_number: "",
//     address: "",
//   });
//   const [mapCoordinates, setMapCoordinates] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCardInfo({
//       ...cardInfo,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("Token not available. Please authenticate.");
//         alert("Token not available. Please authenticate.");
//         return;
//       }
//       setIsLoading(true);

//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${cardInfo.address}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
//       );
//       if (response.data.results.length > 0) {
//         const location = response.data.results[0].geometry.location;
//         const updatedCardInfo = {
//           ...cardInfo,
//           latitude: location.lat,
//           longitude: location.lng,
//         };

//         // Create the addressData object with updated latitude and longitude
//         const addressData = updatedCardInfo;

//         console.log("Updated Address Data:", addressData);

//         const addressResponse = await fetch(
//           "https://cafescale.com/api/v1/customer/address/add",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(addressData),
//           }
//         );

//         if (addressResponse.ok) {
//           console.log("Address Added successfully", addressResponse);
//           alert("Address Added successfully");
//           setMapCoordinates({
//             latitude: updatedCardInfo.latitude,
//             longitude: updatedCardInfo.longitude,
//           });
//           setIsLoading(false);
//         } else {
//           console.error("Error Adding Address");
//           alert("Error Adding Address");
//           setIsLoading(false);
//         }
//       } else {
//         console.error("Unable to fetch coordinates for the provided address");
//         alert("Unable to fetch coordinates for the provided address");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error:", error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Header checkout={checkout} />{" "}
//       </div>
//       <br />
//       <br />
//       <br />
//       <Container>
//         <Row>
//           <Col md={6}>
//             <MapComponents
//               latitude={mapCoordinates.latitude}
//               longitude={mapCoordinates.longitude}
//             />
//           </Col>
//           <Col md={6}>
//             <div className="payment-form-container">
//               <h1>Delivery Address</h1>
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label>Address Line</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address"
//                     value={cardInfo.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Address Type</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address_type"
//                     value={cardInfo.address_type}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Contact Person Name</label>
//                   <input
//                     type="text"
//                     name="contact_person_name"
//                     className="input-field input-field-payment"
//                     value={cardInfo.contact_person_name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <div>
//                     <label>Contact Person Number</label>
//                     <input
//                       type="text"
//                       name="contact_person_number"
//                       className="input-field input-field-payment"
//                       value={cardInfo.contact_person_number}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="submit-button"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting...." : " Save Location"}
//                 </button>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Index;

// this is for the suggestion.....////


import React, { useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Header/Index";
import { Col, Container, Row } from "react-bootstrap";
import MapComponents from "./MapComponents";

function Index() {
  const checkout = "Checkout";
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    contact_person_name: "",
    address_type: "",
    contact_person_number: "",
    address: "",
  });
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not available. Please authenticate.");
        alert("Token not available. Please authenticate.");
        return;
      }
      setIsLoading(true);

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cardInfo.address}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
      );
      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        const updatedCardInfo = {
          ...cardInfo,
          latitude: location.lat,
          longitude: location.lng,
        };

        // Create the addressData object with updated latitude and longitude
        const addressData = updatedCardInfo;

        console.log("Updated Address Data:", addressData);

        const addressResponse = await fetch(
          "https://cafescale.com/api/v1/customer/address/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(addressData),
          }
        );

        if (addressResponse.ok) {
          console.log("Address Added successfully", addressResponse);
          alert("Address Added successfully");
          setMapCoordinates({
            latitude: updatedCardInfo.latitude,
            longitude: updatedCardInfo.longitude,
          });
          setIsLoading(false);
        } else {
          console.error("Error Adding Address");
          alert("Error Adding Address");
          setIsLoading(false);
        }
      } else {
        console.error("Unable to fetch coordinates for the provided address");
        alert("Unable to fetch coordinates for the provided address");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
      setIsLoading(false);
    }
  };
  const handleLocationSelect = (location) => {
    // Update the address field with the selected location
    console.log(location,"hhhhh")
    setCardInfo({
      ...cardInfo,
      address: `Latitude: ${location.latitude}, Longitude: ${location.longitude}`,
    });
  };
  // const handleLocationSelect = (locationData) => {
  //   const { latitude, longitude, locationName } = locationData;
  //   console.log(locationName, "hhhhhhhhhhh");
  
  //   // Update the address field with the selected location name
  //   setCardInfo({
  //     ...cardInfo,
  //     address: locationName,
  //   });
  // };


  return (
    <>
      <div>
        <Header checkout={checkout} />{" "}
      </div>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={8}>
            <MapComponents
            onLocationSelect={handleLocationSelect}
              latitude={mapCoordinates.latitude}
              longitude={mapCoordinates.longitude}
            />
          </Col>
          <Col md={4}>
            <div className="payment-form-container">
              <h1>Delivery Address</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Address Line</label>
                  <input
                    type="text"
                    className="input-field input-field-payment"
                    name="address"
                    value={cardInfo.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Address Type</label>
                  <input
                    type="text"
                    className="input-field input-field-payment"
                    name="address_type"
                    value={cardInfo.address_type}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Contact Person Name</label>
                  <input
                    type="text"
                    name="contact_person_name"
                    className="input-field input-field-payment"
                    value={cardInfo.contact_person_name}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label>Contact Person Number</label>
                    <input
                      type="text"
                      name="contact_person_number"
                      className="input-field input-field-payment"
                      value={cardInfo.contact_person_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting...." : " Save Location"}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;