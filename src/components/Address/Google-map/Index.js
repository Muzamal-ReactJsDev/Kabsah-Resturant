// import React from "react";
// import "./Index.css";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import Header from "../../Header/Index";
// import MapComponent from "./MapComponent";
// import GoogleTab from "./Google-map-tab/Index";
// import SaveButton from "./SaveButton/SaveButton";
// const App = () => {
//   const mpaddress = "Add New Address";
//   const savebutton = "Save Button";
//   return (
//     <>
//       <div className="address-top-div">
//         <div>
//           <Header mpaddress={mpaddress} />
//         </div>
//         <br />
//         <br />
//         <br />{" "}
//         <div>
//           <MapComponent />
//         </div>
//         <br />
//         <br />
//         <br />
//         <div>
//           <GoogleTab />
//         </div>
//         <Container>
//           <br />
//           <h5>Delivery Address</h5>
//           <Row xs={6} className="address-for-main-row">
//             <Col xs={12} className="address-for-main-col">
//               <div className="address-main-div-style">
//                 <Form className="this-address-main">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Address Line</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Address" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Apt / Suit / Floor</Form.Label>
//                     <Form.Control type="text" placeholder="Ex: 02" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Business / Building Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Ex: hotels,school etc."
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Contact Person Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter contact person name"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Contact Person Number</Form.Label>
//                     <Form.Control
//                       type="number"
//                       placeholder="Enter contact person number"
//                     />
//                   </Form.Group>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         <br />
//         <br />
//         <br />
//         <div>
//           <SaveButton savebutton={savebutton} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// ya wala vo ha jis ma search krny sy data wohi jo search krty hain us pa click krny sy same data address line ki input ma copy ho jata ha

// import React, { useState } from "react";
// import "./Index.css";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import Header from "../../Header/Index";
// import MapComponent from "./MapComponent";
// import GoogleTab from "./Google-map-tab/Index";
// import SearchBox from "./SearchBox";
// import SaveButton from "./SaveButton/SaveButton";

// const App = () => {
//   const mpaddress = "Add New Address";
//   const savebutton = "Save Button";

//   const [selectPosition, setSelectPosition] = useState(null); // State for MapComponent

//   return (
//     <div className="address-top-div">
//       <div>
//         <Header mpaddress={mpaddress} />
//       </div>
//       <br />
//       <br />
//       <br />
//       <div>
//         <MapComponent selectPosition={selectPosition} />{" "}
//         {/* Pass the state to MapComponent */}
//       </div>
//       <br />
//       <br />
//       <br />
//       <div>
//         <GoogleTab />
//       </div>
//       <Container>
//         <br />
//         <h5>Delivery Address</h5>
//         <Row xs={6} className="address-for-main-row">
//           <Col xs={12} className="address-for-main-col">
//             <div className="address-main-div-style">
//               <Form className="this-address-main">
//                 <Form.Group className="mb-3">
//                   <Form.Label>Address Line</Form.Label>
//                   {/* <Form.Control type="text" placeholder="Enter Address" /> */}
//                   <div>
//                     <SearchBox
//                       selectPosition={selectPosition}
//                       setSelectPosition={setSelectPosition}
//                     />{" "}
//                     {/* Render the SearchBox */}
//                   </div>
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Apt / Suit / Floor</Form.Label>
//                   <Form.Control type="text" placeholder="Ex: 02" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Business / Building Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Ex: hotels,school etc."
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Contact Person Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter contact person name"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Contact Person Number</Form.Label>
//                   <Form.Control
//                     type="number"
//                     placeholder="Enter contact person number"
//                   />
//                 </Form.Group>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <br />
//       <br />
//       <br />

//       <br />
//       <br />
//       <br />
//       <div>
//         <SaveButton savebutton={savebutton} />
//       </div>
//     </div>
//   );
// };

// export default App;

// yahan sy data my address ma send kr rha ha ya uski coding ha....

import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Header/Index";
import "./Index.css";
import "./SaveButton/SaveButton.css";
import MapComponent from "./MapComponent";
import GoogleTab from "./Google-map-tab/Index";
import SearchBox from "./SearchBox";
import SaveButton from "./SaveButton/SaveButton";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
const App = () => {
  const mpaddress = "Add New Address";
  // const savebutton = "Save Button";

  const [selectPosition, setSelectPosition] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleEditAddress = () => {
    // Navigate to the second component (modify the path based on your route configuration)
    navigate("/Address");
  };

  const handleDeleteAddress = () => {
    // Set the selected address to null to remove it from the list
    setSelectedAddress(null);
  };
  const handleSave = () => {
    // Your save logic goes here
    // ...

    // Navigate back to the first component (App) after saving
    // navigate("/Address"); // Modify the path based on your route configuration
    navigate("/Address", { state: { selectedAddress } });
  };

  return (
    <div className="address-top-div">
      <div>
        <Header mpaddress={mpaddress} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <MapComponent selectPosition={selectPosition} />{" "}
        {/* Pass the state to MapComponent */}
      </div>
      <br />
      <div>
        <GoogleTab />
      </div>
      <Container className="">
        <br />
        <h5>Delivery Address</h5>
        <Row className="address-for-main-row">
          <Col xs={12} className="address-for-main-col">
            <div className="address-main-div-style">
              <Form className="this-address-main">
                <Form.Group className="">
                  <Form.Label>Address Line</Form.Label>
                  <div>
                    <SearchBox
                      selectPosition={selectPosition}
                      setSelectPosition={setSelectPosition}
                      setSelectedAddress={setSelectedAddress}
                    />{" "}
                    {/* Render the SearchBox */}
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Apt / Suit / Floor</Form.Label>
                  <Form.Control type="text" placeholder="Ex: 02" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Business / Building Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex: hotels, school etc."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Person Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter contact person name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Person Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter contact person number"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <div className="fixed-button">
        <button className="fixed-button-button" onClick={handleSave}>
          Save Button
          
        </button>
      </div>
    </div>
  );
};

export default App;
