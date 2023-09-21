import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import Logo from "../Images/Help and support.png";
import { MdLocationOn } from "react-icons/md";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
const Index = (props) => {
  const support = "Help & Support";
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
                      <MdLocationOn className="cart-locationmark" /> Resturent
                      Address
                    </h5>
                  </Card.Title>
                  <Card.Text className="cardtext">
                    2022 NORTHDALE BOULEVARD W COON RAPIDS, MN 55433
                  </Card.Text>
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
      <div>
        <Foot />
      </div>
    </>
  );
};

export default Index;
