import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Index.css";
const Index = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={12}>
            <InputGroup className="cart-promo-main">
              <Form.Control
                aria-label="Example text with button addon"
                placeholder="Enter Promo Code"
                className="cart-promo-input"
              />
              <Button id="button-addon1" className="cart-promo-button">
                Apply
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
