import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
const Index = () => {
  const terms = "Terms & Conditions";
  return (
    <>
      <div className="Terms-Condition-main-container">
        <div>
          <Header terms={terms} />
        </div>
        <br />
        <br />
        <br />
        <Container className="Terms-condition-sub-container">
          <Row>
            <Col>
              <span className="Terms-condition-heading"> Eligibility: </span>
              Users must be at least 18 years of age and have the legal capacity
              to enter into a binding agreement with the restaurant. Personal
              Information: Users will be required to provide accurate and
              current personal information, including their full name, email
              address, and phone number.
              <br />
              <br />
              <span className="Terms-condition-heading">
                Account Security:{" "}
              </span>
              Users are responsible for maintaining the confidentiality of their
              login credentials, including their username and password. The
              restaurant is not responsible for any unauthorized access toa
              user's account due to a user's failure to protect their login
              information
              <br />
              <br />
              <span className="Terms-condition-heading">
                Use of Information:{" "}
              </span>
              The restaurant may use the personal information provided by users
              for marketing and promotional purposes. However, the restaurant
              will not sell or disclose a user's personal information, to any
              third party without the user's explicit consent,
              <br />
              <br />
              <span className="Terms-condition-heading">User Conduct: </span>
              Users must agree to use the restaurant's mobile app in accordance
              with all applicable laws and regulations. Users must also agree
              not to engage in any activities that could harm the restaurant or
              its reputation, such as hacking, spamming, or impersonating
              another user.
              <br />
              <br />
              <span className="Terms-condition-heading">Termination: </span>
              The restaurant reserves the right to terminate a user's account at
              any time for any reason, without notice. The restaurant may also
              suspend or terminate a user's access to the mobile app if the user
              violates these terms and conditions.
              <br />
              <br />
              <span className="Terms-condition-heading">
                Disclaimer of Liability:{" "}
              </span>
              The restaurant is not responsible for any damages or losses
              incurred by a user as a result of using the mobile app, including
              but not limited to, lost profits or revenue, or any indirect,
              special, or consequential damages. Governing Law: These terms and
              conditions will be governed by and construed in accordance with
              the laws of the jurisdiction in which the restaurant is located.
              <br />
              <br />
              <span className="Terms-condition-heading">
                {" "}
                Changes to Terms and Conditions:
              </span>
              The restaurant reserves the right to modify these terms and
              conditions at any time, without notice. Users are encouraged to
              review the terms and conditions regularly to ensure they are aware
              of any changes. By signing up for the restaurant's mobile app,
              users agree to these terms and conditions. 
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
