// this is for the new api or /8 wali api

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
  // console.log("data for the Drinks", data[8]);
  console.log("data for the Drinks", data);
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
              <h5 className="sandwich">{data[8]?.name}</h5>
              {data[8]?.products?.map((dataDrinks, index) => (
                <Col
                  xs={6}
                  className="for-sandwich"
                  key={index}
                  onClick={() => handleShowModal(dataDrinks)}
                >
                  {/* this is for the Texting of Card */}
                  <Row className="sandwich-cards">
                    <Col xs={3} className="sandwich-image-col">
                      <img
                        className="sandwich-image"
                        src={`${data2?.base_urls?.product_image_url}/${dataDrinks?.image}`}
                        // src={dataDrinks.image}
                        alt=""
                      />
                    </Col>
                    <Col xs={7} className="sandwich-names-price">
                      <div className="sandwich-both-name-discount">
                        <h7>{dataDrinks.name}</h7>
                        <br />
                        <h7>${dataDrinks.price}</h7>
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
