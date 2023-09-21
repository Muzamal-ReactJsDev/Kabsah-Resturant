import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Header from "../../Header/Index";
import imgLock from "../../Images/LockLogo.png";
import axios from "axios";
import "./Index.css";
import api from "../Api";
const Index = () => {
  const ForgotPassword = "Forgot password";
  const navigate = useNavigate();
  const initialValues = {
    email_or_phone: "",
    restaurant_id: "",
  };
  const validationSchema = Yup.object().shape({
    email_or_phone: Yup.string()
      .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid mobile number")
      .max(15, "Mobile number must be at most 15 characters")
      .required("Mobile number is required"),
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await api.post("/auth/forgot-password", values);

      console.log("Mobile Number:", values.email_or_phone);
      console.log("Restaurant ID:", values.restaurant_id);
      console.log("Response Data:", response.data);

      if (response.status === 200) {
        // Code sent successfully, navigate to verification code form
        navigate("/Verification", {
          state: { email_or_phone: values.email_or_phone },
        });
      }
      // else if (response.status === 404) {
      //   // User not found, display error message
      //   alert(
      //     `User not found. Mobile Number: ${values.email_or_phone}, Restaurant ID: ${values.restaurant_id}`
      //   );
      // }

      // else {
      //   // Request failed, display generic error message
      //   alert(
      //     `User not found. Mobile Number: ${values.email_or_phone}, Restaurant ID: ${values.restaurant_id}`
      //   );
      // }
    } catch (error) {
      console.error("Error:", error);
      // Display general error message
      // alert('An error occurred. Please try again.');
      alert("User not found. Mobile Number");
    }

    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div>
        <div>
          <Header ForgotPassword={ForgotPassword} />
        </div>
        <br />
        <br />
        <Container
          fluid
          className="d-flex align-items-center justify-content-center forgotpassswordContainer"
        >
          <Card className="forgotpasssword-card">
            <Card.Img variant="top" src={imgLock} className="card-image-card" />
            <Card.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <Row className="mb-3">
                      <Col xs={12}>
                        <div className="form-group">
                          <h3 className="text-center fw-bold">
                            Forgot Password
                          </h3>
                          <label htmlFor="email_or_phone">Mobile Number</label>
                          <Field name="email_or_phone">
                            {({ field }) => (
                              <InputMask
                                {...field}
                                mask="(999) 999-9999"
                                maskChar=" "
                                className="form-control"
                                placeholder="(111) 111-1111"
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="email_or_phone"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div className="form-group">
                          <label htmlFor="restaurant_id">Restaurant ID</label>
                          <Field
                            placeholder="Enter the Restaurant ID "
                            type="text"
                            name="restaurant_id"
                            id="restaurant_id"
                            className={`form-control ${
                              errors.restaurant_id && touched.restaurant_id
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="restaurant_id"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      className="forgotpassswordBtn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Code"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Index;
