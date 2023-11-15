import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
import "./Modal.css";
import "../Styling/Sandwich.css";
import { FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import ProductCard from "./ProductCard";
import Beverages from "./BeveragesCard";
import { useDispatch } from "react-redux";
import { RemoveCartItem, addCartItem } from "../Store/slices/cartSlice";

const CustomModal = ({
  show,
  handleClose,
  image,
  name,
  price,
  description,
  selectedItem,
  product_id, // Add product_id as a prop
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!show) {
      // Reset quantity to 1 when modal is closed
      setQuantity(1);
    }
  }, [show]);
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAmount = () => {
    return price * quantity;
  };

  const addToCartHandler = () => {
    dispatch(
      addCartItem({
        selectedItem: {
          product_id, // Include product_id
          image,
          name,
          price,
        },
        quantity,
      })
    );
    handleClose();
  };
  // const removeFromCartHandler = () => {
  //   dispatch(
  //     RemoveCartItem({
  //       selectedItem: {
  //         product_id, // Include product_id
  //         image,
  //         name,
  //         price,
  //       },
  //       quantity,
  //     })
  //   );
  //   handleClose();
  // };
  return (
    <>
      <Container>
        <Modal className="" show={show} onHide={handleClose} centered>
          <Modal.Body className="modal-body">
            <div className="modal-content-wrapper">
              <div>
                <RxCross1 className="modal-cross" onClick={handleClose} />
              </div>
              <Row className="modal-main-row">
                <Col xs={5} className="modal-image-main">
                  <img src={image} alt={name} className="modal-image" />
                </Col>
                <Col xs={5} className="modal-info">
                  <div className="">
                    <div>{name}</div>
                    <div style={{ margin: "6px 0px" }}>${price}</div>
                    <div>Quantity</div>
                  </div>
                </Col>
                <Col xs={2} className="Modal-icons-col">
                  <div className="sandwich-icons-modal">
                    <div>
                      <FaRegHeart
                        className="sandwich-icons-heart-modal"
                        style={{ fontSize: "25px", fontWeight: "bold" }}
                      />
                    </div>
                    <br />
                    <div>
                      <div className="quantity">
                        <span
                          onClick={handleDecreaseQuantity}
                          style={{ fontSize: "25px", fontWeight: "bold" }}
                        >
                          -
                        </span>
                        <span
                          className="modal-quantity-value"
                          style={{
                            margin: "0px 8px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          {quantity}
                        </span>
                        <span
                          onClick={handleIncreaseQuantity}
                          style={{ fontSize: "25px", fontWeight: "bold" }}
                        >
                          +
                        </span>
                      </div>
                      {/* <FaPlus className="sandwich-icons-plus" /> */}
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="modal-desc-heading">Description</div>
                  <p className="modal-desc-para">{description}</p>
                </Col>
                <Col xs={12}>
                  <ProductCard />
                </Col>
                <Col xs={12}>
                  <Beverages />
                </Col>
                <Col xs={12}>
                  <div>
                    <p className="modal-amount">
                      Total Amount: ${handleAmount()}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="modal-button-row">
                <Col xs={12}>
                  <Button className="modal-button" onClick={addToCartHandler}>
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
export default CustomModal;

CustomModal.defaultProps = {
  selectedItem: {},
};
