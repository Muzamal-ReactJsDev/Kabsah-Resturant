import React from "react";
import "./Index.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../Header/Index";
const Index = () => {
  const checkout="Checkout"
  return (
    <>
    <div className="check-out-main-div">

      <div>
<Header checkout={checkout}  />
      </div>
    <br/>
    <br/>
      <Container>
        <Row className="select-branch-row p-3">
          <Col xs={12} className="select-branch p-0">
            Select Branch
          </Col>
        </Row>
        <Row className="main-branch-button-row">
          <Col xs={12}>
            <Button className="main-branch-button">Main Branch</Button>
          </Col>
        </Row>
        <br/>
        {/* This is for the map */}

        <Row>
          <Col>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe 
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Lahore&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Index;
