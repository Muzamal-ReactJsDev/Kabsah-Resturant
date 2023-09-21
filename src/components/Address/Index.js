// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./Index.css";
// import { FaHome } from "react-icons/fa";
// import { RiMap2Fill } from "react-icons/ri";
// import { BsThreeDots } from "react-icons/bs";
// import Header from "../Header/Index";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Foot from "../Foot/Index";
// const Index = (props) => {
//   const [isMenuVisible, setMenuVisible] = useState(false);
//   const myaddress = "Address";
//   const toggleMenu = () => {
//     setMenuVisible(!isMenuVisible);
//   };
//   const address = [
//     {
//       Home: (
//         <div>
//           <FaHome className="address-starting-icon" />
//         </div>
//       ),
//       Name: "Home",
//       Location: "Quaid-i-Azam Campus Lahore, Lahore Punjab,Pakistan",
//       AddressIcon: (
//         <span className="adress-map-content">
//           <RiMap2Fill className="address-map-icon" />
//         </span>
//       ),
//       ThreeDotIcon: <BsThreeDots className="ms-lg-3 ms-md-3 m-0" />,
//     },
//   ];
//   return (
//     <>
//       <div className="Address-main-div">
//         <div>
//           <Header myaddress={myaddress} />
//         </div>
//         <br />
//         <br />
//         <br />

//         <Container className="address-main">
//           <Row className="address-main-row">
//             {address.map((value, index) => {
//               return (
//                 <>
//                   <Col className="address-card-main-box">
//                     <Row className="address-card-row">
//                       <Col xs={1} className="address-main-icon">
//                         <span>{value.Home}</span>
//                       </Col>
//                       <Col xs={8} className="address-card-box">
//                         <div className="address-content-location">
//                           <h7 className="address-naming">{value.Name}</h7>
//                           <br />
//                           <h7 className="address-location ">
//                             {value.Location}
//                           </h7>
//                         </div>
//                       </Col>
//                       <Col xs={3} className="Address-dot-icon-main p-0">
//                         <div className="Address-dot-icon">
//                           <span className="address-icon">
//                             {value.AddressIcon}
//                           </span>
//                           <span
//                             className="ThreeDot-icon ms-lg-1 ms-md-1 m-0 "
//                             onClick={toggleMenu}
//                           >
//                             {value.ThreeDotIcon}
//                           </span>
//                           {isMenuVisible && (
//                             <div className="Three-dot-menu">
//                               <button className="Three-dot-edit-button">
//                                 Edit
//                               </button>
//                               <button className="Three-dot-delete-button">
//                                 Delete
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </Col>
//                     </Row>
//                   </Col>
//                 </>
//               );
//             })}
//           </Row>
//         </Container>
//         <div className="address-faPlus-screen">
//           <Link to="/Address/GoogleMap">
//             <FaPlus className="address-plus-whole-screen" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <Foot />
//       </div>
//     </>
//   );
// };

// export default Index;

// jo data ma map sy ly rha hon ya uski coding ha

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Index.css";
import { FaHome } from "react-icons/fa";
import { RiMap2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Header from "../Header/Index";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Foot from "../Foot/Index";

const Index = ({
  myaddress,
  // selectedAddress,
  setSelectedAddress,
  handleEditAddress,
  handleDeleteAddress,
}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const location = useLocation();
  const selectedAddress = location?.state?.selectedAddress;
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const address = [
    {
      Home: (
        <div>
          <FaHome className="address-starting-icon" />
        </div>
      ),
      Name: "Home",
      Location: "Quaid-i-Azam Campus Lahore, Lahore Punjab, Pakistan",
      AddressIcon: (
        <span className="adress-map-content">
          <RiMap2Fill className="address-map-icon" />
        </span>
      ),
      ThreeDotIcon: <BsThreeDots className="ms-lg-3 ms-md-3 m-0" />,
    },
  ];

  return (
    <>
      <div className="Address-main-div">
        <div>
          <Header myaddress={myaddress} />
        </div>
        <br />
        <br />
        <br />
        <Container className="address-main">
          <Row className="address-main-row">
            {selectedAddress && (
              <>
                <Col className="address-card-main-box">
                  <Row className="address-card-row">
                    <Col xs={1} className="address-main-icon">
                      <span>{address[0].Home}</span>
                    </Col>
                    <Col xs={8} className="address-card-box">
                      <div className="address-content-location">
                        <h7 className="address-naming">
                          {selectedAddress.Name}
                        </h7>
                        <br />
                        <h7 className="address-location">
                          {selectedAddress.Location}
                        </h7>
                      </div>
                    </Col>
                    <Col xs={3} className="Address-dot-icon-main p-0">
                      <div className="Address-dot-icon">
                        <span className="address-icon">
                          {address[0].AddressIcon}
                        </span>
                        <span
                          className="ThreeDot-icon ms-lg-1 ms-md-1 m-0 "
                          onClick={toggleMenu}
                        >
                          {address[0].ThreeDotIcon}
                        </span>
                        {isMenuVisible && (
                          <div className="Three-dot-menu">
                            <button
                              className="Three-dot-edit-button"
                              onClick={handleEditAddress}
                            >
                              Edit
                            </button>
                            <button
                              className="Three-dot-delete-button"
                              onClick={handleDeleteAddress}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Container>
        <div className="address-faPlus-screen">
          <Link to="/Address/GoogleMap">
            <FaPlus className="address-plus-whole-screen" />
          </Link>
        </div>
      </div>
      <div>
        <Foot />
      </div>
    </>
  );
};

export default Index;
