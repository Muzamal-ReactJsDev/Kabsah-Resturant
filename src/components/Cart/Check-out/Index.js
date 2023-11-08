// import React, { useState } from "react";
// import "./Index.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "../../Header/Index";
// import { Col, Container, Row } from "react-bootstrap";
// import MapComponents from "./MapComponents";
// import { useEffect } from "react";

// function Index() {
//   const checkout = "Checkout";
//   const navigate = useNavigate();
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

//   const [editable, setEditable] = useState(true); // Add editable state

//   useEffect(() => {
//     // Get the fullName from local storage
//     const fullName = localStorage.getItem("fullName");
//     const phoneNumber = localStorage.getItem("Phone");
//     if (fullName  && phoneNumber ) {
//       // Set the fullName and phoneNumber in the cardInfo
//       setCardInfo({
//         ...cardInfo,
//         contact_person_name: fullName,
//         contact_person_number: phoneNumber,
//       });
//       // Set the input field to non-editable
//       setEditable(true);
//     }
//   }, []); // Run this effect once on component mount
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
//           navigate("/Address")

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
//   const handleLocationSelect = async (location) => {
//     // Update the address field with the selected location
//     const { latitude, longitude } = location;
//     console.log(location, "Locaion Long and lat...!!");

//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
//       );

//       if (response.data.results.length > 0) {
//         // the commented addressComponents in the last of below line gives us the complete details ofaddress.......

//         // const addressComponents = response.data.results[0].address_components;
//         const addressComponents = response.data.results[0].formatted_address;

//         // Extract the relevant address components, e.g., city, state, country, etc.
//         const locationName = addressComponents;
//         // above addressComponents is giving us the data in array form s we use the map......
//         // .map((component) => component.long_name)
//         // .join(", ");

//         setCardInfo({
//           ...cardInfo,
//           address: locationName,
//         });
//         console.log(locationName, "Marked Address");
//       } else {
//         console.error(
//           "Unable to fetch location name for the provided coordinates"
//         );
//         alert("Unable to fetch location name for the provided coordinates");
//       }
//     } catch (error) {
//       console.error("Error fetching location name:", error);
//       alert("Error fetching location name:", error);
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
//           <Col>
//             <MapComponents
//               onLocationSelect={handleLocationSelect}
//               latitude={mapCoordinates.latitude}
//               longitude={mapCoordinates.longitude}
//             />
//           </Col>
//           <Col md={4}>
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
//                     disabled={editable}
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

// this is for Using Update api.....

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";
import { Col, Container, Row } from "react-bootstrap";
import MapComponents from "./MapComponents";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Index";

function AddAddress() {
  const checkout = "Checkout";
  const navigate = useNavigate();
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
  const [editable, setEditable] = useState(true); // Add editable state

  useEffect(() => {
    // Get the fullName from local storage
    const fullName = localStorage.getItem("fullName");
    const phoneNumber = localStorage.getItem("Phone");
    if (fullName && phoneNumber) {
      // Set the fullName and phoneNumber in the cardInfo
      setCardInfo({
        ...cardInfo,
        contact_person_name: fullName,
        contact_person_number: phoneNumber,
      });
      // Set the input field to non-editable
      setEditable(true);
    }
  }, []); // Run this effect once on component mount

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

        // Add a check to determine whether to add a new address or update an existing one
        if (editable) {
          // Create a new address with a POST request
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
            navigate("/Address");
          } else {
            console.error("Error Adding Address");
            alert("Error Adding Address");
          }
        } else {
          // Update an existing address with a PUT request
          const addressResponse = await fetch(
            `https://cafescale.com/api/v1/customer/address/update/1`, // Replace '1' with the actual address ID
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(addressData),
            }
          );

          if (addressResponse.ok) {
            console.log("Address Updated successfully", addressResponse);
            alert("Address Updated successfully");
            setMapCoordinates({
              latitude: updatedCardInfo.latitude,
              longitude: updatedCardInfo.longitude,
            });
            navigate("/Address");
          } else {
            console.error("Error Updating Address");
            alert("Error Updating Address");
          }
        }
      } else {
        console.error("Unable to fetch coordinates for the provided address");
        alert("Unable to fetch coordinates for the provided address");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSelect = async (location) => {
    // Update the address field with the selected location
    const { latitude, longitude } = location;
    console.log(location, "Location Long and lat...!!");

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
      );

      if (response.data.results.length > 0) {
        const addressComponents = response.data.results[0].formatted_address;
        const locationName = addressComponents;

        setCardInfo({
          ...cardInfo,
          address: locationName,
        });
        console.log(locationName, "Marked Address");
      } else {
        console.error(
          "Unable to fetch location name for the provided coordinates"
        );
        alert("Unable to fetch location name for the provided coordinates");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      alert("Error fetching location name:", error);
    }
  };

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
                    // disabled={editable}
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
                  // disabled={isLoading}
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

export default AddAddress;
