import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import img1 from "../Images/Slider/Sish Taouk.jpg";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
const Index = (props) => {
  const notification = "Notification";
  const Inbox = [
    {
      Date: <div>18 May 2023</div>,
      Image: img1,
      Name: "Tuesday deal",
      TimeSlot: <span>11:45 AM</span>,
    },
  ];
  return (
    <>
      <div className="Inbox-main-div">
        <div>
          <Header notification={notification} />
        </div>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col className="Inbox-main-Col">
              {Inbox.map((value, index) => {
                return (
                  <>
                    <div>{value.Date}</div>

                    <Row className="Inbox-sub-row">
                      <Col xs={2} className="Inbox-left-column">
                        <img
                          className="inbox-image"
                          src={value.Image}
                          rounded
                          alt=" "
                        />
                      </Col>
                      <Col xs={6} className="Inbox-value-main">
                        <p className="Inbox-value-name">{value.Name}</p>
                      </Col>
                      <Col xs={4} className="Inbox-right">
                        <p className="inbox-para-slot">{value.TimeSlot}</p>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
        <br />
        <div>
          <Foot />
        </div>
      </div>
    </>
  );
};

export default Index;
