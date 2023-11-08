import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="foot-main">
      <Container >
        <Row className="p-4">
          <Col md={4} lg={4}>
            <h2 className="resturant-name">Kabsah Resturant</h2>
            <h7 className="newsletter-name">Newsletter</h7>
            <br />
            <p>Subscribe to our news letter to get latest Updates</p>
            <div className="foot-input-group">
              <input
                type="text"
                className="foot-input-text"
                placeholder="Your Email Address"
              />
              <button className="foot-input-button">Subscribe</button>
            </div>
          </Col>
          <Col md={4} lg={4}>
            <h3 className="foot-Heading">My Account</h3>
            <ul>
              <li>
                <Link to="/Profile" className="foot-link-foot">
                  Profile
                </Link>{" "}
              </li>
              <li>
                <Link to="/Address" className="foot-link-foot">
                  Address
                </Link>{" "}
              </li>
              <li>
                <Link to="/" className="foot-link-foot">
                  Coupons
                </Link>
              </li>
              <li>
                <Link to="/Wallet" className="foot-link-foot">
                  Wallet
                </Link>{" "}
              </li>
              <li>
                <Link to="/" className="foot-link-foot">
                  Orders
                </Link>{" "}
              </li>
            </ul>
          </Col>
          <Col md={4} lg={4}>
            <h3 className="foot-Heading">Quick Links</h3>
            <ul>
              <li>
                <Link to="/Support" className="foot-link-foot">
                  Contact Us
                </Link>{" "}
              </li>
              <li>
                <Link to="/Privacy" className="foot-link-foot">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Terms" className="foot-link-foot">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/About-Us" className="foot-link-foot">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <p className="text-center">
              <AiFillCopyrightCircle className="foot-copyRight" /> 2023 Kabsah
              Resturant
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
