import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Index.css";
import { FaHome, FaPlus } from "react-icons/fa";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Index";

function ShowAddAddress() {
  const ShowAddAddressName = "Address";
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null); // To store the selected address
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token in show_Add_Addrss", token);
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cafescale.com/api/v1/customer/address/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddresses(response.data);
        console.log(response.data, "Here is the List Added");
        localStorage.setItem("deliveryId", response.data[0].id);
        localStorage.setItem("deliverytype", response.data[0].address_type);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditAddress = (addressId) => {
    setSelectedAddress(addressId); // Set the selected address to be edited
    navigate("/Cart/CheckOut"); // Redirect to the edit address page
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://cafescale.com/api/v1/customer/address/delete?address_id=${addressId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter out the removed address from the addresses array
      setAddresses((prevAddresses) =>
        prevAddresses.filter((address) => address.id !== addressId)
      );
      setSelectedAddress(null); // Clear the selected address
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <div>
          <Header ShowAddAddressName={ShowAddAddressName} />{" "}
        </div>
        <br />
        <br />
        <br />
      
      <Container>
        <Row>
          <Col>
            <div className="">
              <h1>Address List</h1>
              {addresses.length === 0 ? (
                <p>List is empty</p>
              ) : (
                <>
                  {loading ? <p>Loading...</p> : null}
                  <ul>
                    {addresses.map((addaddress) => (
                      <li key={addaddress.id}>
                        <div className="addaddressstyle my-2">
                          <div className="addaddressstyle-div1">
                            <FaHome />
                            {addaddress.address}
                            <Dropdown>
                              <Dropdown.Toggle
                                className="dropdown-split-style"
                                id={`dropdown-split-${addaddress.id}`}
                              />
                              <Dropdown.Menu
                                show={selectedAddress === addaddress.id}
                              >
                                <Dropdown.Item
                                  onClick={() =>
                                    handleDeleteAddress(addaddress.id)
                                  }
                                >
                                  Delete
                                </Dropdown.Item>
                                <Dropdown.Item
                                  variant="success"
                                  onClick={() =>
                                    handleEditAddress(addaddress.id)
                                  }
                                >
                                  Edit
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
       <div className="wallet-faPlus-screen">
            <Link to="/Address/CheckOut">
              <FaPlus className="wallet-plus-whole-screen" />
            </Link>
          </div>
      </div>
    </>
  );
}

export default ShowAddAddress;
