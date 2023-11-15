import React, { useState } from "react";
import "./Index.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDetails } from "../../Store/slices/cartSlice";

function PlaceOrder() {
  const [formData, setFormData] = useState({
    order_amount: 0,
    delivery_address_id: "",
    order_type: "",
    branch_id: "",
    delivery_time: "",
    delivery_date: "",
    distance: 0,
    payment_method: "",
    payment_id: "",
  });

  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

  // Retrieve total price from localStorage and set it to state
  useEffect(() => {
    const TotalPrice = localStorage.getItem("totalPrice");
    if (TotalPrice) {
      setTotalPrice(parseFloat(TotalPrice)); // Convert string to float if needed
      setFormData({ ...formData, order_amount: parseFloat(TotalPrice) });
    }
  }, [formData]);

  const dispatch = useDispatch();
  const cart = useSelector(cartDetails);
  const [editable, setEditable] = useState(false); // Add editable state
  // Get the Order Amount from localStorage
  useEffect(() => {
    // Get the fullName from local storage
    const TotalPrice = localStorage.getItem("totalPrice");
    const phoneNumber = localStorage.getItem("Phone");
    const payment_id=localStorage.getItem('payment_id')
    const deliveryTpe=localStorage.getItem('delivery_type')
    const BranchId=localStorage.getItem('Branch_id')

    
    if (TotalPrice && phoneNumber) {
      // Set the fullName and phoneNumber in the cardInfo
      setFormData({
        ...formData,
        order_amount: TotalPrice,
        delivery_address_id: 47,
        payment_id:payment_id,
        order_type:deliveryTpe,
        branch_id:BranchId,
      });
      // Set the input field to non-editable
      setEditable(true);
    }
  }, [dispatch]);
  const getProductIdsFromCart = () => {
    return cart.items.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity, // Include quantity for each product
    }));
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    setIsLoading(true);

    try {
      const productIds = getProductIdsFromCart();
      const response = await fetch(
        "https://cafescale.com/api/v1/customer/order/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Use the saved token for authorization
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...formData,
            cart: productIds, // Add product_ids from cart to the request body
          }),
        }
      );

      if (response.ok) {
        // Order placed successfully
        console.log("Order placed successfully");
        alert("Order placed successfully");
        setIsLoading(false);
      } else {
        // Handle error
        console.error("Error placing the order");
        alert("Error placing the order");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
        Place an Order
      </h2>
      <form className="custom-order-form" onSubmit={handleSubmit}>
        {/* <div>
          <label>Order Amount:</label>
          <input
            type="text"
            name="order_amount"
            value={formData.order_amount}
            disabled={editable}
            onChange={handleChange}
            required
          />
        </div> */}
        {/* <div>
          <label>Delivery Address ID:</label>
          <input
            type="text"
            name="delivery_address_id"
            value={formData.delivery_address_id}
            // disabled={editable}
            onChange={handleChange}
            required
          />
        </div> */}
        {/* <div>
          <label>Order Type:</label>
          <select
            name="order_type"
            value={formData.order_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Order Type</option>
            <option value="type1">Pick up</option>
            <option value="type2">Delivery</option>
          </select>
        </div> */}
        {/* <div>
          <label>Branch ID:</label>
          <input
            type="text"
            name="branch_id"
            value={formData.branch_id}
            onChange={handleChange}
            required
          />
        </div> */}
        <div>
          <label>Delivery Time:</label>
          <input
            type="text"
            name="delivery_time"
            value={formData.delivery_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Delivery Date:</label>
          <input
            type="date"
            name="delivery_date"
            value={formData.delivery_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Distance:</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Stripe</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {/* <div>
          <label>Payment ID:</label>
          <input
            type="text"
            name="payment_id"
            value={formData.payment_id}
            onChange={handleChange}
            required
          />
        </div> */}
        <div>
          <button disabled={isLoading} type="submit">
            {isLoading ? "Order is Placing" : `Place Order - Total: $${totalPrice.toFixed(2)}`}
          
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
