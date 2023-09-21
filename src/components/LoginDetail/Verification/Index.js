import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import Header from "../../Header/Index";
import axios from "axios"; // Import Axios library
const Index = () => {
  const ForgotPassword = "Forgot password";
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [error, setError] = useState(null); // State variable for error message
  const codeInputRefs = useRef([]);
  useEffect(() => {
    if (location.state && location.state.mobileNumber) {
      setMobileNumber(location.state.mobileNumber);
      startResendTimer();
    } else {
      navigate("");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send verification code to the API
      const response = await axios.post(
        "http://cafescale.com/api/v1/auth/check-phone",
        {
          mobileNumber,
          verificationCode,
        }
      );

      // Code verification successful
      // ...

      // Clear the code
      setVerificationCode("");
    } catch (error) {
      // Error handling for wrong OTP
      setError("Invalid verification code. Please try again.");
    }
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1); // Only allow a single digit
    }

    // Update the verification code
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    // Focus the next input box
    if (value && index < codeInputRefs.current.length - 1) {
      codeInputRefs.current[index + 1].focus();
    }
  };

  const handleResend = async () => {
    try {
      // Resend the code using the API
      const response = await axios.post(
        "http://cafescale.com/api/v1/auth/resend-code",
        {
          mobileNumber,
        }
      );

      // Start the resend timer
      startResendTimer();
    } catch (error) {
      // Handle resend code error
      setError("Failed to resend the verification code. Please try again.");
    }
  };
  const startResendTimer = () => {
    let timer = 30; // Resend timer in seconds
    setResendTimer(timer);

    const interval = setInterval(() => {
      timer--;
      setResendTimer(timer);

      if (timer === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  return (
    <>
      <div>
        <div>
          <Header ForgotPassword={ForgotPassword} />
        </div>
        <Container
          fluid
          className="d-flex align-items-center justify-content-center SignupContainer"
        >
          <Card className="Signup-card">
            <Card.Body>
              <h3 className="text-center fw-bold">Verification Code</h3>
              <p className="text-center">
                Please enter the 4 digit code sent to:{" "}
                <strong>{mobileNumber}</strong>
              </p>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12}>
                    <div className="form-group">
                      <div className="code-input-container">
                        {Array.from({ length: 4 }, (_, index) => (
                          <input
                            className="verification-Input-style"
                            key={index}
                            type="text"
                            name={`code-${index}`}
                            id={`code-${index}`}
                            value={verificationCode[index] || ""}
                            onChange={(e) =>
                              handleCodeChange(index, e.target.value)
                            }
                            maxLength="1"
                            ref={(ref) => (codeInputRefs.current[index] = ref)}
                          />
                        ))}
                      </div>
                    </div>
                    {error && (
                      <p className="text-center text-danger">{error}</p>
                    )}
                    <p className="text-center mt-3">
                      Didn't receive the code?{" "}
                      {resendTimer === 0 ? (
                        <Button
                          className="ResendBtn"
                          onClick={handleResend}
                          disabled={resendTimer !== 0}
                        >
                          Resend Code
                        </Button>
                      ) : (
                        `Resend in ${resendTimer}s`
                      )}
                    </p>
                    <Button type="submit" className="VerifyBtn">
                      Verify
                    </Button>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Index;
