import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import PeopleAlsoLike from "./People-also-like/Index";
import PromoCode from "./Promo-Code/Index";
import CartDiscount from "./Cart-Discount/Index";
import { Link } from "react-router-dom";
import Header from "../Header/Index";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveCartItem,
  addCartItem,
  cartDetails,
} from "../Store/slices/cartSlice";
const Index = () => {
  const Mycart = "My Cart";

  const [cartItems, setCartItems] = useState([]);
  const { items } = useSelector(cartDetails);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-sub-main">
        <div>
          <Header Mycart={Mycart} />
        </div>
        <br />
        <br />
        <br />
        <Container>
          {items?.map((item, index) => (
            <Row key={index}>
              <Col className="cart-main-col">
                <Row className="cart-main-row">
                  <Col xs={2} className="for-cart-image-col">
                    <img
                      className="cart-image"
                      src={`https://cafescale.site/storage/app/public/product/${item.image}`}
                      alt=""
                    />
                  </Col>
                  <Col xs={6} className="cart-name-price">
                    <div className="cart-both-name-price">
                      <h7 className="cart-name">{item.name}</h7>
                      <br />
                      <h7 className="cart-price">${item.price}</h7>
                    </div>
                  </Col>
                  <Col xs={4} className="cart-delete-count">
                    <div className="cart-count-value">
                      {item.quantity > 0 && (
                        <span
                          className="cart-count-value-minus"
                          onClick={() =>
                            dispatch(
                              RemoveCartItem({
                                image: item.image,
                                name: item.name,
                                price: item.price,
                              })
                            )
                          }
                        >
                          -
                        </span>
                      )}
                      <span
                        className="quantity-digit"
                        style={{ margin: "0px 15px" }}
                      >
                        {item.quantity}
                      </span>
                      <span
                        className="cart-count-value-plus"
                        onClick={() =>
                          dispatch(
                            addCartItem({
                              selectedItem: {
                                image: item.image,
                                name: item.name,
                                price: item.price,
                              },
                              quantity: 1,
                            })
                          )
                        }
                      >
                        +
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
          <Row>
            <PeopleAlsoLike
              // addToCart={handleAddToCart}
              cartItems={cartItems}
              // removeFromCart={handleRemoveFromCart}
            />
          </Row>
          <Row>
            <PromoCode />
          </Row>
          <Row>
            {" "}
            <CartDiscount />
          </Row>
          <Row>
          <Col className="cart-button-row text-center">
            <Link type="button" to="/Cart/CheckOut" className="cart-button">
              Continue Checkout
            </Link>
          </Col>
        </Row>
        </Container>
       
      </div>
    </>
  );
};
export default Index;
