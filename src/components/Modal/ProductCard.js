import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import {
  useGetAllImageProductsQuery,
  useGetAllRecomendedProductQuery,
} from "../Service/Index";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Store/slices/cartSlice";

const App = ({ selectedItem, handleClose }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError } =
    useGetAllRecomendedProductQuery();
  const { data: imageData, isLoading: isImageLoading } =
    useGetAllImageProductsQuery();
  const imageProducts = imageData?.base_urls?.product_image_url || {};
  const products = data?.products || [];
  const [quantities, setQuantities] = useState([]);
  useEffect(() => {
    if (products.length > 0 && quantities.length === 0) {
      setQuantities(Array(products.length).fill(0));
    }
  }, [products, quantities]);
  const handleIncrement = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    if (quantities[index] > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };
  const handleAmount = () => {
    return products.map((data, index) => data.price * quantities[index]);
  };
  // const addToCartHandler = (selectedItem) => {
  //   dispatch(
  //     addCartItem({
  //       selectedItem: {selectedItem},
  //       quantities
  //     }
  //   ));
  //   // handleClose();
  // };
  return (
    <>
      <div className="recommended-sides">Recommended Sides</div>
      <div className="product-container">
        {isLoading || isImageLoading ? (
          <h6>Loading... Please wait</h6>
        ) : (
          <div className="scrollable-wrapper">
            <div className="product-card-wrapper">
              {products.map((dataofrecoproduct, index) => (
                <div className="product-card" key={dataofrecoproduct.id}>
                  <div className="product-card-image">
                    <img
                      src={`${imageProducts}/${dataofrecoproduct.image}`}
                      alt="Product"
                    />
                  </div>
                  <div className="product-card-details">
                    <h7 className="product-card-name">
                      {dataofrecoproduct.name}
                    </h7>
                    <div className="product-card-price">
                      <span className="product-card-price-value">
                        ${dataofrecoproduct.price}
                      </span>
                      {quantities[index] > 0 ? (
                        <div className="product-card-quantity">
                          <button onClick={() => handleDecrement(index)}>
                            -
                          </button>
                          <span>{quantities[index]}</span>
                          <button onClick={() => handleIncrement(index)}>
                            +
                          </button>
                        </div>
                      ) : (
                        <div className="product-card-quantity">
                          <button
                            onClick={() =>
                              dispatch(
                                addCartItem({
                                  selectedItem: {
                                    product_id: dataofrecoproduct.id,
                                    image: `${imageProducts}/${dataofrecoproduct.image}`,
                                    name: dataofrecoproduct.name,
                                    price: dataofrecoproduct.price,
                                  },
                                  quantity: 1,
                                })
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                    {/* <button onClick={() =>
                          dispatch(
                            addCartItem({
                              selectedItem: {
                                image: dataofrecoproduct.image,
                                name: dataofrecoproduct.name,
                                price: dataofrecoproduct.price,
                              },
                              quantity: 1,
                            })
                          )
                        }>ADD CART</button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className="total_amount">Total Amount: {handleAmount()}</div> */}
    </>
  );
};
export default App;

// ////////////////////////////
