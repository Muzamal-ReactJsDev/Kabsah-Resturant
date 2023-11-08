import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import { FaWallet, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
// import Addcard from "./Addcarddata/Addcard";
import { Link } from "react-router-dom";
// import { Grid } from "@mui/material";
const Index = ({ data }) => {
  const walletname = "Wallet";
  const wallet = [
    {
      Iconwallet: (
        <span>
          <FaWallet className="walletmain" />
        </span>
      ),
      WalletName: "Visa",
      WalletDetails: "4242*****4242",
      WalletDelete: (
        <span>
          <MdDelete className="walletDelete" />
        </span>
      ),
    },
  ];
  return (
    <>
      <div className="wallet-main-div-wallet">
        <div>
          <Header walletname={walletname} />
        </div>
        <br />
        <br />
        <br />
        <Container className="my-2" style={{ position: "relative" }}>
          <Row>
            {wallet.map((value, Index) => {
              return (
                <>
                  <Col className="wallet-main-col-wallet">
                    <Row className="wallet-main-row-wallet">
                      <Col xs={2} className="wallet-icon-wallet">
                        <div>{value.Iconwallet}</div>
                      </Col>
                      <Col xs={5} className="wallet-name-details">
                        <div>
                          <div>{value.WalletName}</div>
                          <div>{data?.cardNumber}</div>
                        </div>
                      </Col>
                      <Col xs={5} className="wallet-delete-icon">
                        <div>{value.WalletDelete}</div>
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })}
            <div className="wallet-faPlus-screen">
              <Link to="/Wallet/Data">
                <FaPlus className="wallet-plus-whole-screen" />
              </Link>
            </div>
            {/* <Grid sx={{ mt: 3}}>
              <p>Card Name: {data?.cardName}</p>
              <p>Card Number: {data?.cardNumber}</p>
              <p>Expiry Date: {data?.expiry_date}</p>
              <p>CVV: {data?.cvv}</p>
            </Grid> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
