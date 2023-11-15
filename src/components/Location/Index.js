import React from "react";
import { useGetAllBranchesLocationQuery } from "../Service/Index";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Index";
import { BiStoreAlt } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import PlaceOrder from "./PlaceOrder/Index";
const Index = () => {
  const storeValue = "Store";
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllBranchesLocationQuery();
  console.log(data, "Data of the Branches");
  localStorage.setItem("latitude_1", data?.branches[0].latitude);
  localStorage.setItem("longitude_1", data?.branches[0].longitude);
  localStorage.setItem("Branch_id", data?.branches[0].id);
  return (
    <>
      <div>
        <Header storeValue={storeValue} />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h2>Choose the Store</h2>
            </Col>
          </Row>
          {!isLoading ? (
            <>
              {data?.branches?.map((branchesData, id) => {
                return (
                  <>
                    <Row key={branchesData.id}>
                      <Col xs={12}>
                        <h5>
                          <span className="me-2">
                            <BiStoreAlt />
                          </span>
                          {branchesData.name}
                        </h5>

                        <p>
                          <span className="me-2">
                            <FaMapMarkerAlt />
                          </span>
                          {branchesData.address}
                        </p>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </>
          ) : (
            <h6>Loading....... Please Wait</h6>
          )}
        </Container>
      </div>
      <div>
        <PlaceOrder />
      </div>
    </>
  );
};

export default Index;
