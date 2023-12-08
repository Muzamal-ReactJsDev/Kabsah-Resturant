import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Index.css";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Imglogo from "../../Images/WhatsApp Image 2023-05-03 at 2.10.31 PM.jpeg";
import api from "../Api";
const SignupForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    restaurant_id: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    f_name: Yup.string().required("First name is required"),
    l_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid phone number")
      .required("Phone number is required"),
    restaurant_id: Yup.string()
      .required("Restaurant ID is required")
      .nullable(),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await api
      .post("/auth/registration", values)
      .then((response) => {
        console.log(response.config.data);
        // here is use the parse to get the value from string......
        // const data = JSON.parse(response.config.data);
        // const fullName = `${data.FirstName} ${data.l_name}`;
        // localStorage.setItem("fullName", fullName);
      
        // const PhoneNumber = data.phone;
        
        alert("You are Registered Successfully❤😎");
        // console.log(`First Name: ${fullName}`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("There is error in the data");
      });

    resetForm();
    setSubmitting(false);
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center SignupContainer"
    >
      <Card className="Signup-card">
        <Card.Body>
          <Card.Img variant="top" src={Imglogo} className="card-image-card" />
          <h3 className="text-center fw-bold">Sign Up</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="FirstName">First Name</label>
                      <Field
                        type="text"
                        name="f_name"
                        id="f_name"
                        placeholder="Enter the First Name"
                        className={`form-control ${
                          errors.f_name && touched.f_name ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="FirstName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="l_name">Last Name</label>
                      <Field
                        placeholder="Enter the Last Name"
                        type="text"
                        name="l_name"
                        id="l_name"
                        className={`form-control ${
                          errors.l_name && touched.l_name ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="l_name"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        placeholder="Enter the Email"
                        type="email"
                        name="email"
                        id="email"
                        className={`form-control ${
                          errors.email && touched.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <Field
                        placeholder="Enter the Phone Number"
                        type="text"
                        name="phone"
                        id="phone"
                        className={`form-control ${
                          errors.phone && touched.phone ? "is-invalid" : ""
                        }`}
                        maxLength="15"
                      >
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
                        name="phone"
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
                        placeholder="Enter the Restaurant ID"
                        type="number"
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
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="password">password</label>
                      <Field
                        placeholder="Enter Your password"
                        type="password"
                        name="password"
                        id="password"
                        className={`form-control ${
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="SignupBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Continue..." : "Continue"}
                </Button>
                <p className="text-center mt-3">
                  Already have an account ?{" "}
                  <Link className="anchorforgot" to="/">
                    {" "}
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignupForm;
