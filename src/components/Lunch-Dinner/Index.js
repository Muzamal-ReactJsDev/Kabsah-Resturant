// import React, { useState } from "react";
// import "../Styling/Sandwich.css";
// import { FaRegHeart, FaPlus } from "react-icons/fa";
// import { Col, Container, Row } from "react-bootstrap";
// import {
//   useGetAllImageProductsQuery,
//   useGetAllPostQuery,
// } from "../Service/Index";
// import CustomModal from "../Modal/Modal";
// const Index = () => {
//   const { data, isLoading, isError, isFetching, isSuccess } =
//     useGetAllPostQuery();
//   console.log( "data for the Lunch/Dinner",data);
//   const {
//     data: data2,
//     isLoading: isLoading2,
//     isError: isError2,
//     isFetching: isFetching2,
//     isSuccess: isSuccess2,
//   } = useGetAllImageProductsQuery();
//   console.log(data2?.base_urls?.product_image_url, "data2");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

import { waitForElementToBeRemoved } from "@testing-library/react";

//   const handleShowModal = (item) => {
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedItem(null);
//   };
//   return (
//     <>
//       <Container>
//         <Row>
//           {!isLoading && !isLoading2 ? (
//             <>
//               <h5 className="sandwich">{data?.["LUNCH / DINNER"].name}</h5>
//               {data?.["LUNCH / DINNER"].products.map((dataLunchDinner, index) => (
//                 <Col
//                   xs={6}
//                   className="for-sandwich"
//                   key={index}
//                   onClick={() => handleShowModal(dataLunchDinner)}
//                 >
//                   {/* this is for the Texting of Card */}
//                   <Row className="sandwich-cards">
//                     <Col xs={3} className="sandwich-image-col">
//                       <img
//                         className="sandwich-image"
//                         src={`${data2?.base_urls?.product_image_url}/${dataLunchDinner?.image}`}
//                         // src={dataLunchDinner.image}
//                         alt=""
//                       />
//                     </Col>
//                     <Col xs={7} className="sandwich-names-price">
//                       <div className="sandwich-both-name-discount">
//                         <h7>{dataLunchDinner.name}</h7>
//                         <br />
//                         <h7>${dataLunchDinner.price}</h7>
//                       </div>
//                     </Col>
//                     <Col xs={2} className="sandwich-icons-col">
//                       <div className="sandwich-icons">
//                         <div>
//                           <FaRegHeart className="sandwich-icons-heart" />
//                         </div>
//                         <br />
//                         <div>
//                           <FaPlus className="sandwich-icons-plus" />
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Col>
//               ))}
//               {selectedItem && (
//                 <CustomModal
//                   show={showModal}
//                   handleClose={handleCloseModal}
//                   image={`${data2?.base_urls?.product_image_url}/${selectedItem?.image}`}
//                   name={selectedItem?.name}
//                   price={selectedItem?.price}
//                   description={selectedItem?.description}
//                   selectedItem={selectedItem}
//                 />
//               )}
//             </>
//           ) : (
//             <h6>Loading....... Please Wait</h6>
//           )}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Index;

// this for the Second Api /8 wali

import React, { useState } from "react";
import "../Styling/Sandwich.css";
import { FaRegHeart, FaPlus } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import {
  useGetAllImageProductsQuery,
  useGetAllPostQuery,
} from "../Service/Index";
import CustomModal from "../Modal/Modal";
const Index = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllPostQuery();
  // console.log("data for the Lunch/Dinner", data[2]);
  console.log("data for the Lunch/Dinner", data);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(data2?.base_urls?.product_image_url, "data2");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };
  return (
    <>
      <Container>
        <Row>
          {!isLoading && !isLoading2 ? (
            <>
              <h5 className="sandwich">{data[2]?.name}</h5>
              {data[2]?.products.map((dataLunchDinner, index) => (
                <Col
                  xs={6}
                  className="for-sandwich"
                  key={index}
                  onClick={() => handleShowModal(dataLunchDinner)}
                >
                  {/* this is for the Texting of Card */}
                  <Row className="sandwich-cards">
                    <Col xs={3} className="sandwich-image-col">
                      <img
                        className="sandwich-image"
                        src={`${data2?.base_urls?.product_image_url}/${dataLunchDinner?.image}`}
                        // src={dataLunchDinner.image}
                        alt=""
                      />
                    </Col>
                    <Col xs={7} className="sandwich-names-price">
                      <div className="sandwich-both-name-discount">
                        <h7>{dataLunchDinner.name}</h7>
                        <br />
                        <h7>${dataLunchDinner.price}</h7>
                      </div>
                    </Col>
                    <Col xs={2} className="sandwich-icons-col">
                      <div className="sandwich-icons">
                        <div>
                          <FaRegHeart className="sandwich-icons-heart" />
                        </div>
                        <br />
                        <div>
                          <FaPlus className="sandwich-icons-plus" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              ))}
              {selectedItem && (
                <CustomModal
                  show={showModal}
                  handleClose={handleCloseModal}
                  image={`${data2?.base_urls?.product_image_url}/${selectedItem?.image}`}
                  name={selectedItem?.name}
                  price={selectedItem?.price}
                  description={selectedItem?.description}
                  selectedItem={selectedItem}
                />
              )}
            </>
          ) : (
            <h6>Loading....... Please Wait</h6>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Index;
