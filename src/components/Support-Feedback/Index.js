import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import Logo from "../Images/Help and support.png";
import { MdLocationOn } from "react-icons/md";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
import { Link } from "react-router-dom";

const Index = (props) => {
  const support = "Help & Support";
  // Retrieve restaurant address from localStorage
  const restAddress =
    localStorage.getItem("Branch_address") || "No address found";

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = "tel:(763) 208-0643";
  };

  return (
    <>
      <div className="support-main-div">
        <div>
          <Header support={support} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container className="help-support-sub-container">
          <Row className="cardmainrow" style={{ justifyContent: "center" }}>
            <Col md={6}>
              <Card className="cart-main-card">
                <div className="card-image-div">
                  <Card.Img className="card-image" variant="top" src={Logo} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <h5 className="cart-resturent-address">
                      <MdLocationOn className="cart-locationmark" /> Restaurant
                      Address
                    </h5>
                  </Card.Title>
                  <Card.Text className="cardtext">{restAddress}</Card.Text>
                  <hr className="cart-card-line" />
                </Card.Body>
                <Row className="cart-card-btn">
                  <Col xs={6}>
                    <Button
                      className="cart-cardbtncallnow "
                      style={{
                        backgroundColor: "white",
                        width: "100%",
                      }}
                      onClick={handlePhoneCall} // Call the function to initiate the call
                    >
                      Call Now
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="cart-cardbtnmsg"
                      style={{
                        width: "100%",
                      }}
                    >
                      Send a Message
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
