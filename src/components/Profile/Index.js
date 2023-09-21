import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Index.css";
import img1 from "../Images/Profile.png";
import Header from "../Header/Index";
import Footers from "../Footers/Index";
import Foot from "../Foot/Index";
const Index = (props) => {
  const profile = "My Profile";
  return (
    <>
    <div className="form-main-top-div">
      <div>
        <Header profile={profile} />
      </div>
      <br />
      <br />
      <br />
      <Container>
        <Row xs={6} className="profile-form-main-row">
          <Col className="profile-form-main-col">
            <div className="form-main-div-style">
              <Form className="this-main-form">
                <Form.Group className="mb-3 profile-image-section">
                  <img className="profile-images-profile" src={img1} alt="" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John"
                    className="profile-input-profile"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Doe"
                    className="profile-input-profile"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="profile-input-profile"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter mobile number"
                    className="profile-input-profile"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=".........."
                    className="profile-input-profile"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=".........."
                    className="profile-input-profile"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Footers />
      </div> 
    </div>
       <Foot />
       </>
  );
};

export default Index;
