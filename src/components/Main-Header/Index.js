import React from "react";
import "./Index.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Images/WhatsApp Image 2023-05-03 at 2.10.31 PM.jpeg";
import { HiShoppingCart } from "react-icons/hi";
import Sidebar from "../Sidebar/Index";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <header className="fixed-header">
            <Col xs={6}>
              <div className="left-side">
                <div className="hamburger-menu">
                  <Sidebar />
                </div>
                <img className="main-logo" src={logo} alt="Logo" />
              </div>
            </Col>
            <Col xs={4}>
              <div className="right-side">
                <Link to="Cart" className="icon1">
                  <HiShoppingCart />
                </Link>
                {/* <div className="icon2"></div> */}
              </div>
            </Col>
          </header>
        </Row>
      </Container>
    </>
  );
};

export default Index;
