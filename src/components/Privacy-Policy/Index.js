import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import Header from "../Header/Index";
import Foot from "../Foot/Index";
const Index = () => {
  const privacy = "Privacy Policy";
  return (
    <>
      <div className="Inbox-main-Privacy">
        <div>
          <Header privacy={privacy} />
        </div>
        <br />
        <br />
        <br />
        <Container className="main-privacy">
          <Row>
            <Col>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h5 className="privacy-information">Information We Collect</h5>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
              <h5 className="privacy-information">
                Security of Your Information
              </h5>
              <p>
                {" "}
                Lorem Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <h5 className="privacy-information">Your Choices</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
              <h5 className="privacy-information">
                Changes to this Privacy Policy
              </h5>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
              <h5 className="privacy-information">Contact Us</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Foot />
      </div>
    </>
  );
};

export default Index;
