// import React from "react";
// import {
//   useGetAllImageProductsQuery,
//   useGetAllPopularItemsQuery,
// } from "../../Service/Index";
// import { MdAdd, MdRemove } from "react-icons/md";
// import { Col, Container, Row } from "react-bootstrap";
// import { addCartItem,RemoveCartItem } from "../../Store/slices/cartSlice";
// import { useDispatch } from "react-redux";
// const Index = ({ addToCart, cartItems, removeFromCart }) => {
//   const { data, isLoading } = useGetAllPopularItemsQuery();
//   const products = data?.products || [];

//   const { data: imageData, isLoading: isImageLoading } =
//     useGetAllImageProductsQuery();
//   const imageProducts = imageData?.base_urls?.product_image_url || {};

//   // const handleAddToCart = (image, name, price) => {
//   //   const existingItem = cartItems.find(
//   //     (item) =>
//   //       item.image === image && item.name === name && item.price === price
//   //   );

//   //   if (!existingItem) {
//   //     addToCart(image, name, price);
//   //   }
//   // };

//   return (
//     <>
//       <Container>
//         <Row>
//           <Col>
//             {isLoading ? (
//               <h6>Loading... Please wait</h6>
//             ) : (
//               <>
//                 <div className="recommended-sides">People also Like</div>
//                 <div className="product-container">
//                   <div className="scrollable-wrapper">
//                     <div className="product-card-wrapper">
//                       {products.map((product, index) => {
//                         const existingItem = cartItems.find(
//                           (item) =>
//                             item.image ===
//                               `${imageProducts}/${product.image}` &&
//                             item.name === product.name &&
//                             item.price === product.price
//                         );
//                         const quantity = existingItem
//                           ? existingItem.quantity
//                           : 0;

//                         return (
//                           <div className="product-card" key={index}>
//                             <div className="product-card-image">
//                               <img
//                                 src={`${imageProducts}/${product.image}`}
//                                 alt="Product"
//                               />
//                             </div>
//                             <div className="product-card-details">
//                               <h7 className="product-card-name">
//                                 {product.name}
//                               </h7>
//                               <div className="product-card-price">
//                                 <span className="product-card-price-value">
//                                   ${product.price}
//                                 </span>
//                                 {quantity > 0 ? (
//                                   <div className="product-card-quantity">
//                                     <span
//                                       className="quantity-button"
//                                       onClick={() =>
//                                         removeFromCart(
//                                           `${imageProducts}/${product.image}`,
//                                           product.name,
//                                           product.price
//                                         )
//                                       }
//                                     >
//                                       <MdRemove className="quantity-icon" />
//                                     </span>
//                                     <span className="quantity-digit">
//                                       {quantity}
//                                     </span>
//                                     <span
//                                       className="quantity-button"
//                                       onClick={() =>
//                                         addToCart(
//                                           `${imageProducts}/${product.image}`,
//                                           product.name,
//                                           product.price
//                                         )
//                                       }
//                                     >
//                                       <MdAdd className="quantity-icon" />
//                                     </span>
//                                   </div>
//                                 ) : (
//                                   <span
//                                     className="quantity-button"
//                                     onClick={() =>
//                                       addToCart(
//                                         `${imageProducts}/${product.image}`,
//                                         product.name,
//                                         product.price
//                                       )
//                                     }
//                                   >
//                                     <MdAdd className="quantity-icon" />
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Index;


import React from "react";
import {
  useGetAllImageProductsQuery,
  useGetAllPopularItemsQuery,
} from "../../Service/Index";
import { MdAdd, MdRemove } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { addCartItem,RemoveCartItem } from "../../Store/slices/cartSlice";
import { useDispatch } from "react-redux";
const Index = ({ addToCart, cartItems, removeFromCart }) => {
  const { data, isLoading } = useGetAllPopularItemsQuery();
  const products = data?.products || [];

  const { data: imageData, isLoading: isImageLoading } =
    useGetAllImageProductsQuery();
  const imageProducts = imageData?.base_urls?.product_image_url || {};
const dispatch=useDispatch();
  // const handleAddToCart = (image, name, price) => {
  //   const existingItem = cartItems.find(
  //     (item) =>
  //       item.image === image && item.name === name && item.price === price
  //   );

  //   if (!existingItem) {
  //     addToCart(image, name, price);
  //   }
  // };

  return (
    <>
      <Container>
        <Row>
          <Col>
            {isLoading ? (
              <h6>Loading... Please wait</h6>
            ) : (
              <>
                <div className="recommended-sides">People also Like</div>
                <div className="product-container">
                  <div className="scrollable-wrapper">
                    <div className="product-card-wrapper">
                      {products.map((product, index) => {
                        const existingItem = cartItems.find(
                          (item) =>
                            item.image ===
                              `${imageProducts}/${product.image}` &&
                            item.name === product.name &&
                            item.price === product.price
                        );
                        const quantity = existingItem
                          ? existingItem.quantity
                          : 0;

                        return (
                          <div className="product-card" key={index}>
                            <div className="product-card-image">
                              <img
                                src={`${imageProducts}/${product.image}`}
                                alt="Product"
                              />
                            </div>
                            <div className="product-card-details">
                              <h7 className="product-card-name">
                                {product.name}
                              </h7>
                              <div className="product-card-price">
                                <span className="product-card-price-value">
                                  ${product.price}
                                </span>
                                {quantity > 0 ? (
                                  <div className="product-card-quantity">
                                    <span
                                      className="quantity-button"
                                      onClick={() =>
                                        removeFromCart(
                                          `${imageProducts}/${product.image}`,
                                          product.name,
                                          product.price
                                        )
                                      }
                                    >
                                      <MdRemove className="quantity-icon" />
                                    </span>
                                    <span className="quantity-digit">
                                      {quantity}
                                    </span>
                                    <span
                                      className="quantity-button"
                                      onClick={() =>
                                        addToCart(
                                          `${imageProducts}/${product.image}`,
                                          product.name,
                                          product.price
                                        )
                                      }
                                    >
                                      <MdAdd className="quantity-icon" />
                                    </span>
                                  </div>
                                ) : (
                                  <span
                                    className="quantity-button"
                                    // onClick={() =>
                                    //   dispatch(
                                    //   addCartItem({
                                    //    image:`${imageProducts}/${product.image}`,
                                    //    name: product.name,
                                    //   price:  product.price
                                    // }
                                    //   )
                                    //   )
                                    // }
                                    onClick={() =>
                                      dispatch(
                                        addCartItem({
                                          selectedItem: {
                                            image: product.image,
                                            name: product.name,
                                            price: product.price,
                                          },
                                          quantity: 1,
                                        })
                                      )
                                    }
                                  
                                 
                                  >
                                    <MdAdd className="quantity-icon" />
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;