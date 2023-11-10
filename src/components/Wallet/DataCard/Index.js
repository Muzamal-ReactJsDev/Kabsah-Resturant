// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   FloatingLabel,
// } from "react-bootstrap";
// import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./Index.css"; // Import custom CSS styles
// import { FaWallet } from "react-icons/fa";
// import Header from "../../Header/Index";
// const App = () => {
//   const CardData = "Add Card";
//   const cardNumberRegExp = /^(?:\d{4}\s?){3}\d{4}$/;
//   const cardExpiryRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
//   const validationSchema = Yup.object().shape({
//     cardNumber: Yup.string()
//       .matches(cardNumberRegExp, "Invalid card number")
//       .required("Card number is required"),
//     cardExpiry: Yup.string()
//       .matches(cardExpiryRegExp, "Invalid card expiry")
//       .required("Card expiry is required"),
//     cvv: Yup.string()
//       .matches(/^\d{3}$/, "Invalid CVV")
//       .required("CVV is required"),
//     cardHolder: Yup.string().required("Card holder is required"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

//   const handleCardNumberChange = (e, handleChange) => {
//     const { value } = e.target;
//     const formattedValue = value
//       .replace(/\s/g, "") // Remove existing spaces
//       .replace(/(\d{4})/g, "$1 ") // Add a space after every four digits
//       .trim(); // Trim any leading/trailing spaces

//     handleChange("cardNumber")(formattedValue);
//   };

//   const handleCardExpiryChange = (e, handleChange) => {
//     const { value } = e.target;
//     const formattedValue = value
//       .replace(/\//g, "") // Remove existing slashes
//       .replace(/(\d{2})/g, "$1/") // Add a slash after the second digit
//       .slice(0, 5); // Limit the input to "MM/YY" format

//     handleChange("cardExpiry")(formattedValue);
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <Header CardData={CardData} />
//         </div>
//         <br />
//         <Container className="card-data-container">
//           <Row className="card-data-row m-0">
//             <Col>
//               <Formik
//                 initialValues={{
//                   cardNumber: "",
//                   cardExpiry: "",
//                   cvv: "",
//                   cardHolder: "",
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ handleSubmit, handleChange, values, errors, touched }) => (
//                   <Form
//                     noValidate
//                     onSubmit={handleSubmit}
//                     className="card-data-form-styling"
//                   >
//                     <div className="card-data-border-styling">
//                       <Row>
//                         <Col>
//                           <Form.Group controlId="cardNumber">
//                             <FloatingLabel
//                               controlId="cardNumber"
//                               label="Card Number"
//                               className={`form-control ${
//                                 touched.cardNumber && errors.cardNumber
//                                   ? "is-invalid"
//                                   : ""
//                               }`}
//                             >
//                               <Field
//                                 type="text"
//                                 name="cardNumber"
//                                 className="form-control"
//                                 placeholder="xxxx xxxx xxxx xxxx"
//                                 value={values.cardNumber}
//                                 onChange={(e) =>
//                                   handleCardNumberChange(e, handleChange)
//                                 }
//                                 maxLength={19}
//                               />
//                               <FaWallet className="card-data-fa-icon" />
//                             </FloatingLabel>
//                             <ErrorMessage
//                               name="cardNumber"
//                               component="div"
//                               className="invalid-feedback"
//                             />
//                             {/* <Form.Text className="text-muted">
//                       Enter your 16-digit card number with spaces after every
//                       four digits.
//                     </Form.Text> */}
//                           </Form.Group>
//                         </Col>
//                         <hr />
//                       </Row>

//                       <Row>
//                         <Col>
//                           <Form.Group controlId="cardExpiry">
//                             <FloatingLabel
//                               controlId="cardExpiry"
//                               label="Card Expiry"
//                               className={`form-control ${
//                                 touched.cardExpiry && errors.cardExpiry
//                                   ? "is-invalid"
//                                   : ""
//                               }`}
//                             >
//                               <Field
//                                 type="text"
//                                 name="cardExpiry"
//                                 className="form-control"
//                                 value={values.cardExpiry}
//                                 onChange={(e) =>
//                                   handleCardExpiryChange(e, handleChange)
//                                 }
//                                 maxLength={5}
//                                 placeholder="MM/YY"
//                               />
//                             </FloatingLabel>
//                             <ErrorMessage
//                               name="cardExpiry"
//                               component="div"
//                               className="invalid-feedback"
//                             />
//                             {/* <Form.Text className="text-muted">
//                           Enter the card expiry date in MM/YY format.
//                         </Form.Text> */}
//                           </Form.Group>
//                         </Col>
//                         <Col>
//                           <Form.Group controlId="cvv">
//                             <FloatingLabel
//                               controlId="cvv"
//                               label="CVV"
//                               className={`form-control ${
//                                 touched.cvv && errors.cvv ? "is-invalid" : ""
//                               }`}
//                             >
//                               <Field
//                                 type="text"
//                                 name="cvv"
//                                 className="form-control"
//                                 value={values.cvv}
//                                 onChange={handleChange}
//                                 maxLength={3}
//                                 placeholder="123"
//                               />
//                             </FloatingLabel>
//                             <ErrorMessage
//                               name="cvv"
//                               component="div"
//                               className="invalid-feedback"
//                             />
//                             {/* <Form.Text className="text-muted">
//                           Enter the 3-digit CVV number from the back of your
//                           card.
//                         </Form.Text> */}
//                           </Form.Group>
//                         </Col>
//                         <hr />
//                       </Row>

//                       <Form.Group controlId="cardHolder">
//                         <FloatingLabel
//                           controlId="cardHolder"
//                           label="Card Holder"
//                           className={`form-control ${
//                             touched.cardHolder && errors.cardHolder
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                         >
//                           <Field
//                             type="text"
//                             name="cardHolder"
//                             className="form-control"
//                             value={values.cardHolder}
//                             onChange={handleChange}
//                             placeholder="John Doe"
//                           />
//                         </FloatingLabel>
//                         <ErrorMessage
//                           name="cardHolder"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                         {/* <Form.Text className="text-muted">
//                       Enter the name as it appears on the card.
//                     </Form.Text> */}
//                       </Form.Group>
//                     </div>
//                     {/* <Row>
//                     <Col> */}
//                     <Button className="card-data-buttton" type="submit">
//                       Submit
//                     </Button>
//                     {/* </Col>
//                 </Row> */}
//                   </Form>
//                 )}
//               </Formik>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default App;

// // Here i use the Api's......

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Index.css"; // Import custom CSS styles
import { FaWallet } from "react-icons/fa";
import Header from "../../Header/Index";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoaing] = useState(false);
  const CardData = "Add Card";
  const cardNumberRegExp = /^(?:\d{4}\s?){3}\d{4}$/;
  const cardExpiryRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .matches(cardNumberRegExp, "Invalid card number")
      .required("Card number is required"),
    cardExpiry: Yup.string()
      .matches(cardExpiryRegExp, "Invalid card expiry")
      .required("Card expiry is required"),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "Invalid CVV")
      .required("CVV is required"),
    cardHolder: Yup.string().required("Card holder is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const token = localStorage.getItem("token");
    console.log("Token in Payment.js:", token);

    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    try {
      // Log the serialized form data
      const requestData = JSON.stringify({
        card_no: values.cardNumber.replace(/\s/g, ""), // Remove spaces from card number
        exp_month: values.cardExpiry.split("/")[0], // Extract month from MM/YY
        exp_year: values.cardExpiry.split("/")[1], // Extract year from MM/YY
        cvc: values.cvv,
        card_holder_name: values.cardHolder,
      });

      console.log("Request Data:", requestData);

      const response = await fetch(
        "https://cafescale.com/api/v1/customer/paymentmethod/createPaymentMethod",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: requestData,
        }
      );

      // Log the entire response for detailed error analysis
      console.log("API Response:", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log("API Response Data:", responseData);
        alert("Added Succesfully");
        navigate("/Wallet");
      } else {
        console.error("API Error:", response.statusText);
        setIsLoaing(false);
        // Log the error message
        try {
          const errorData = await response.json();
          console.error("API Error Data:", errorData);
          setIsLoaing(false);
          if (errorData.message) {
            console.error("API Error Message:", errorData.message);
          }
        } catch (error) {
          console.error("Failed to parse error response JSON:", error);
        }
      }

      setSubmitting(false);
    } catch (error) {
      console.error("API Error:", error);
      setSubmitting(false);
    }
  };

  const handleCardNumberChange = (e, handleChange) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s/g, "") // Remove existing spaces
      .replace(/(\d{4})/g, "$1 ") // Add a space after every four digits
      .trim(); // Trim any leading/trailing spaces

    handleChange("cardNumber")(formattedValue);
  };

  const handleCardExpiryChange = (e, handleChange) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\//g, "") // Remove existing slashes
      .replace(/(\d{2})/g, "$1/") // Add a slash after the second digit
      .slice(0, 5); // Limit the input to "MM/YY" format

    handleChange("cardExpiry")(formattedValue);
  };

  return (
    <>
      <div className="nn">
        <div>
          <Header CardData={CardData} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container className="card-data-container">
          <Row className="card-data-row m-0">
            <Col>
              <Formik
                initialValues={{
                  cardNumber: "",
                  cardExpiry: "",
                  cvv: "",
                  cardHolder: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  handleSubmit,
                  isSubmitting,
                  handleChange,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form
                    noValidate
                    onSubmit={handleSubmit}
                    className="card-data-form-styling"
                  >
                    <div className="card-data-border-styling">
                      <Row>
                        <Col>
                          <Form.Group controlId="cardNumber">
                            <FloatingLabel
                              controlId="cardNumber"
                              label="Card Number"
                              className={`form-control ${
                                touched.cardNumber && errors.cardNumber
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <Field
                                type="text"
                                name="cardNumber"
                                className="form-control"
                                placeholder="xxxx xxxx xxxx xxxx"
                                value={values.cardNumber}
                                onChange={(e) =>
                                  handleCardNumberChange(e, handleChange)
                                }
                                maxLength={19}
                              />
                              <FaWallet className="card-data-fa-icon" />
                            </FloatingLabel>
                            <ErrorMessage
                              name="cardNumber"
                              component="div"
                              className="invalid-feedback"
                            />
                            {/* <Form.Text className="text-muted">
                      Enter your 16-digit card number with spaces after every
                      four digits.
                    </Form.Text> */}
                          </Form.Group>
                        </Col>
                        <hr />
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group controlId="cardExpiry">
                            <FloatingLabel
                              controlId="cardExpiry"
                              label="Card Expiry"
                              className={`form-control ${
                                touched.cardExpiry && errors.cardExpiry
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <Field
                                type="text"
                                name="cardExpiry"
                                className="form-control"
                                value={values.cardExpiry}
                                onChange={(e) =>
                                  handleCardExpiryChange(e, handleChange)
                                }
                                maxLength={5}
                                placeholder="MM/YY"
                              />
                            </FloatingLabel>
                            <ErrorMessage
                              name="cardExpiry"
                              component="div"
                              className="invalid-feedback"
                            />
                            {/* <Form.Text className="text-muted">
                          Enter the card expiry date in MM/YY format.
                        </Form.Text> */}
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="cvv">
                            <FloatingLabel
                              controlId="cvv"
                              label="CVV"
                              className={`form-control ${
                                touched.cvv && errors.cvv ? "is-invalid" : ""
                              }`}
                            >
                              <Field
                                type="text"
                                name="cvv"
                                className="form-control"
                                value={values.cvv}
                                onChange={handleChange}
                                maxLength={3}
                                placeholder="123"
                              />
                            </FloatingLabel>
                            <ErrorMessage
                              name="cvv"
                              component="div"
                              className="invalid-feedback"
                            />
                            {/* <Form.Text className="text-muted">
                          Enter the 3-digit CVV number from the back of your
                          card.
                        </Form.Text> */}
                          </Form.Group>
                        </Col>
                        <hr />
                      </Row>

                      <Form.Group controlId="cardHolder">
                        <FloatingLabel
                          controlId="cardHolder"
                          label="Card Holder"
                          className={`form-control ${
                            touched.cardHolder && errors.cardHolder
                              ? "is-invalid"
                              : ""
                          }`}
                        >
                          <Field
                            type="text"
                            name="cardHolder"
                            className="form-control"
                            value={values.cardHolder}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </FloatingLabel>
                        <ErrorMessage
                          name="cardHolder"
                          component="div"
                          className="invalid-feedback"
                        />
                        {/* <Form.Text className="text-muted">
                      Enter the name as it appears on the card.
                    </Form.Text> */}
                      </Form.Group>
                    </div>
                    {/* <Row>
                    <Col> */}
                    <Button
                      className="card-data-buttton"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                    {/* </Col>
                </Row> */}
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
