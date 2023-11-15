import React from "react";
import "./Index.css";
import { Navbar, Container } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <Navbar fixed="top" style={{ backgroundColor: "white" }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/navbar">
            <FaChevronLeft className="less-then-icon" />
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="mx-auto profile-header-name">
          <h5 className="heading-main-head">
            {props.data}
            {props.profile}
            {props.myaddress}
            {props.notification}
            {props.walletname}
            {props.support}
            {props.privacy}
            {props.terms}
            {props.checkout}
            {props.Mycart}
            {props.mpaddress}
            {props.CardData}
            {props.ForgotPassword}
            {props.ShowAddAddressName}
            {props.storeValue}
          </h5>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
