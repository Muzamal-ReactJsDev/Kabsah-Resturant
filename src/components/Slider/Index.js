// import React from "react";
// import "./Index.css"; // Import the CSS file
// import { Col, Container, Row } from "react-bootstrap";
// import {
//   useGetAllImageProductsQuery,
//   useGetAllPostQuery,
// } from "../Service/Index";
// const Index = () => {
//   const { data, isLoading, isError, isFetching, isSuccess } =
//     useGetAllPostQuery();
//   console.log(data, "Rao Muzamal Naseem");
//   // const {
//   //   data: data2,
//   //   isLoading: isLoading2,
//   //   isError: isError2,
//   //   isFetching: isFetching2,
//   //   isSuccess: isSuccess2,
//   // } = useGetAllImageProductsQuery();

//   // console.log(data2?.base_urls?.product_image_url, "data2");
//   const slide = [
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//     {
//       Image: require("../Images/Basbosah.jpg"),
//       Name: "Apitizer",
//     },
//   ];

//   return (
//     <Container>
//       <Row>
//         {/* {!isLoading ? (
//           <> */}
//         <div className="main-image-slider">
//           {slide.map((slide, i) => {
//             return (
//               <div className="slider-container-slider" key={slide}>
//                 <Col className="">
//                   <div className="wrapper-slider-wrapper">
//                     <img
//                       className="slider-image-slider"
//                       src={slide.Image}
//                       alt=" "
//                     />
//                   </div>
//                   <h7 className="slider-text-name">{slide.Name}</h7>
//                 </Col>
//               </div>
//             );
//           })}
//         </div>
//         {/* </>
//         ) : (
//           <h6>Loading....... Please Wait</h6>
//         )} */}
//       </Row>
//     </Container>
//   );
// };

// export default Index;

// yahan hum api sy data ly rhy hain us k liya ya nechay file ha///////////

import React from "react";
import "./Index.css"; // Import the CSS file
import { Col, Container, Row } from "react-bootstrap";
import {
  useGetAllImageProductsQuery,
  useGetAllPostQuery,
} from "../Service/Index";
import img12 from "../Images/Basbosah.jpg";
import { Link } from "react-router-dom";
const Index = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllPostQuery();
  console.log("Data for The slider", data?.name);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log("Images For the Slider", data2?.base_urls?.category_image_url);
  return (
    <Container>
      <Row>
        {!isLoading && !isLoading2 ? (
          <>
            <div className="main-image-slider">
              <div className="slider-container-slider">
                {data?.map((slider, i) => (
                  <Col xs={12} className="" key={i}>
                    <div className="wrapper-slider-wrapper">
                      <Link to="">
                      <img
                        className="slider-image-slider"
                        src={`${data2?.base_urls?.category_image_url}/${slider.image}`}
                        // src={slider?.image}
                        alt="images"
                      />
                      
                      </Link>
                      
                      {/* <div>{slider.order}</div> */}
                    </div>
                    <text className="slider-text-name">{slider.name}</text>
                  </Col>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h6>Loading....... Please Wait</h6>
        )}
      </Row>
    </Container>
  );
};
export default Index;
