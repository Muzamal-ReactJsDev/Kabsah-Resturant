import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import { FaPlus } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Header from "../Header/Index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Index = () => {
  const walletname = "Wallet";
  const [paymentCards, setPaymentCards] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    axios
      .post(
        "https://cafescale.com/api/v1/customer/paymentmethod/getPaymentCards",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setPaymentCards(response.data);
        console.log("payment Id", response.data[0].payment_id);
        localStorage.setItem("payment_id", response.data[0].payment_id);
      })
      .catch((error) => {
        console.error("Error in the Payment Card List", error);
      });
  }, []);

  const handleDeleteAddress = async (cardId, paymentId) => {
    console.log("Here is the ID to Deleted", cardId);
    console.log("Here is the Payment ID", paymentId);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://cafescale.com/api/v1/customer/paymentmethod/deletePaymentMethods/${cardId}/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter out the removed address from the addresses array
      setPaymentCards((prevPaymentCards) =>
        prevPaymentCards.filter(
          (card) => card.id !== cardId && card.payment_id !== paymentId
        )
      );
      console.log("After axios.delete - Request succeeded");
    }catch (error) {
      console.error("After axios.delete - Request failed", error);
    }
  };

  return (
    <>
      <div className="wallet-main-div-wallet">
        <div>
          <Header walletname={walletname} />
        </div>
        <br />
        <br />
        <br />
        <Container className="my-2">
          <Row className="muzamal">
            {paymentCards.map((value) => {
              return (
                <Col
                  key={value.id}
                  md={5}
                  className="wallet-main-col-wallet my-3 ms-2"
                >
                  <Row className="wallet-main-row-wallet">
                    <Col xs={2} className="wallet-icon-wallet">
                      <div>
                        <FaRegCreditCard className="payment-method-icons-card" />
                      </div>
                    </Col>
                    <Col xs={5} className="wallet-name-details">
                      <div>
                        <div>{value.customer_account}</div>
                        <div>************{value.card_no}</div>
                      </div>
                    </Col>
                    <Col xs={5} className="wallet-delete-icon">
                      <div
                        onClick={() =>
                          handleDeleteAddress(value.id, value.payment_id)
                        }
                      >
                        {/* Adding onClick event to trigger deletion */}
                        <AiFillDelete className="payment-method-icons-delete" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>

          <div className="wallet-faPlus-screen">
            <Link to="/Wallet/Data">
              <FaPlus className="wallet-plus-whole-screen" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Index;
