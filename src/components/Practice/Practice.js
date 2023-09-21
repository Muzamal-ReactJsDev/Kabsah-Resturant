import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../Images/Basbosah.jpg";
import PracticeModal from "./PracticeModal";
import "./Practice.css";

const Practice = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const Content = [
    {
      Image: img1,
      Name: "Rao Muzamal",
      Price: 15,
    },
    {
      Image: img1,
      Name: "Rao Muzamal",
      Price: 15,
    },
    {
      Image: img1,
      Name: "Rao Muzamal",
      Price: 45,
    },
    {
      Image: img1,
      Name: "Rao Muzamal",
      Price: 75,
    },
  ];
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Container className="mt-5" style={{ backgroundColor: "skyblue" }}>
        <Row>
          {Content.map((value, index) => {
            return (
              <Col
                className="cart-main-col"
                key={index}
                // onClick={() => {
                //   setSelectedItem(value);
                //   setShowModal(true);
                // }}
                onClick={()=>handleOpenModal(value)}
              >
                <Row className="cart-main-row">
                  <Col xs={2} className="for-cart-image-col">
                    <img className="cart-image" src={value.Image} alt="" />
                  </Col>
                  <Col xs={6} className="cart-name-price">
                    <div className="cart-both-name-price">
                      <h7 className="cart-name">{value.Name}</h7>
                      <br />
                      <h7 className="cart-price">{value.Price}</h7>
                    </div>
                  </Col>
                  <Col xs={4} className="cart-delete-count">
                    <div className="cart-count-value-plus">+</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="cart-count-value-minus">-</div>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      {selectedItem && (
        <PracticeModal
          Name={selectedItem.Name}
          Image={selectedItem.Image}
          Price={selectedItem.Price}
          handleClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
};

export default Practice;
