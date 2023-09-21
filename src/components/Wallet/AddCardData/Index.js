import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import View from "../Index";
// import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Form } from "react-bootstrap";
const validationSchema = yup.object({
  cardName: yup.string().required("Name is required"),
  cardNumber: yup.number().required("Card Number is required").nullable(),
  expiry_date: yup.string().required("Expiry Date is required").nullable(),
  cvv: yup.string().required("CVV is required").nullable(),
});
const Index = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  //   const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    cardName: "",
    cardNumber: "",
    expiry_date: "",
    cvv: "",
  });
  const formik = useFormik({
    initialValues: inputValue,
    validationSchema,
    onSubmit: (values) => {
      setInputValue(values);
      setIsFormVisible(false);
      // navigate('/Wallet')
    },
  });
  return (
    <>
      {/* <Grid> */}
      {/* <Typography>
                Payment method
              </Typography> */}
      <Container fluid>
        <Row>
          <Col className="p-0">
            {isFormVisible ? (
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={12}>
                    <TextField
                      id="cardName"
                      name="cardName"
                      value={formik.values.cardName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cardName &&
                        Boolean(formik.errors.cardName)
                      }
                      helperText={
                        formik.touched.cardName && formik.errors.cardName
                      }

                      
                      label="Name on card"
                      fullWidth
                      autoComplete="off"
                    />
                  </Col>
                  <Col xs={6}>
                    <TextField
                      id="cardNumber"
                      name="cardNumber"
                      label="Card number"
                      type="number"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cardNumber &&
                        Boolean(formik.errors.cardNumber)
                      }
                      helperText={
                        formik.touched.cardNumber && formik.errors.cardNumber
                      }
                      fullWidth
                      autoComplete="cc-number"
                    />
                  </Col>
                  <Col xs={6}>
                    <TextField
                      id="expiry_date"
                      name="expiry_date"
                      value={formik.values.expiry_date}
                      onChange={formik.handleChange}
                      label="Expiry date"
                      fullWidth
                      error={
                        formik.touched.expiry_date &&
                        Boolean(formik.errors.expiry_date)
                      }
                      helperText={
                        formik.touched.expiry_date && formik.errors.expiry_date
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <TextField
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      fullWidth
                      error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                      helperText={formik.touched.cvv && formik.errors.cvv}
                    />
                  </Col>
                  <Row item xs={12}>
                    <Col>
                      <Button variant="contained" type="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Form>
            ) : (
              <View data={formik.values} />
            )}
          </Col>
        </Row>
      </Container>

      {/* </Grid> */}
    </>
  );
};

export default Index;
