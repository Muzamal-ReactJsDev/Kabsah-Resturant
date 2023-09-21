import Nav from "react-bootstrap/Nav";
import "./Index.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function PillsExample() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav variant="pills" defaultActiveKey="home">
              <Nav.Item>
                <Nav.Link className="for-google-address" href="">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="for-google-address" eventKey="link-1">
                  Work Place
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="for-google-address" eventKey="link-2">
                  Other
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PillsExample;
