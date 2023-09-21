import React from "react";
import "./Index.css";
// import img1 from "../Images/Baklawah.jpg";
import { Col, Container, Row } from "react-bootstrap";
import {
  useGetAllImageProductsQuery,
  useGetSpecialOfferQuery,
} from "../Service/Index";
// import { FaPlus } from "react-icons/fa";
const Card = () => {
  // const usespecialinfo=useGetSpecialOfferQuery();
  // console.log(usespecialinfo.data)
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSpecialOfferQuery();
  console.log(data, "data of Special-Offer");
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(data2?.base_urls?.offer_image_url, "Images of Special-Offer");
  return (
    <>
      <Container className="special-offer-main-container">
        <Row>
          {!isLoading && !isLoading2 ? (
            <>
              <h5 className="special-offer-heading">SPECIAL OFFER</h5>
              {/* <img src={data.image} alt="" className="card-image-special" /> */}
              <div className="special-offer-main-div">
                {data?.map((values, i) => {
                  return (
                    <>
                      <div className="special-offer-subMain-div">
                        <Col className="special-offer">
                          <div className="card-special-offer">
                            <img
                              src={`${data2?.base_urls?.offer_image_url}/${values?.image}`}
                              // src={values.image}
                              alt=""
                              className="card-image-special"
                            />
                            {/* <div className="special-offer-card-title">
                      {values.Name}
                    </div>
                    <div className="special-offer-card-foot">
                      <div className="special-offer-card-price">
                        {values.Price}
                      </div>
                      <div className="special-offer-card-icons">
                        {<FaPlus />}
                      </div>
                    </div> */}
                          </div>
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

export default Card;
