import React from "react";
import "./Index.css";
// import img1 from "../Images/deals.webp";
import { Col, Container, Row } from "react-bootstrap";
import {
  useGetAllImageProductsQuery,
  useGetBannerQuery,
} from "../Service/Index";
const Index = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetBannerQuery();
  console.log(data, "data Of Deals/Banners");
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  // console.log(data2, "Rao Muzamal")
  console.log(
    data2?.base_urls?.category_banner_image_url,
    "Images of Deals/Banner"
  );
  return (
    <>
      <Container className="container  deals-container">
        <Row className="deals-row">
          {!isLoading && !isLoading2 ? (
            <>
              <h5 className="deals">DEALS</h5>
              <div className="deals-slider-main-div">
                {data?.map((dataDeals, index) => {
                  return (
                    <>
                      <div className="deals-slider-subMain-div">
                        <Col>
                          <img
                            src={`${data2?.base_urls.banner_image_url}/${dataDeals?.image}`}
                            // src={dataDeals.image}
                            class="deals-img1"
                            alt="..."
                          ></img>
                        </Col>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <h6>Loading....... Please Wait</h6>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Index;
