// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaHome, FaMapMarkedAlt, FaWallet } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import {
//   MdOutlineNotificationsActive,
//   MdPrivacyTip,
//   MdDelete,
//   MdShoppingCart,
// } from "react-icons/md";
// import { BiSupport } from "react-icons/bi";
// import { SiIterm2 } from "react-icons/si";
// import { IoIosPeople, IoIosLogOut } from "react-icons/io";
// import "./Index.css";
// import { Link } from "react-router-dom";
// import logo from "../Images/WhatsApp Image 2023-05-03 at 2.10.31 PM.jpeg";
// import { ImCross } from "react-icons/im";
// import { useSelector } from "react-redux";
// import { cartDetails } from "../Store/slices/cartSlice";
// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const toggleCloseMenu = () => {
//     setShowMenu(false);
//   };
//   const { totalCount } = useSelector(cartDetails);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-menu">
//           <div className="navbar-menu-icon" onClick={toggleMenu}>
//             <FiMenu />
//           </div>
//           <div className={`navbar-menu-items ${showMenu ? "active" : ""}`}>
//             <Link
//               className="navbar-cross-close text-end"
//               onClick={toggleCloseMenu}
//               onHide
//             >
//               <ImCross />
//             </Link>
//             <ul className="navbar-menu-list">
//               <li className="navbar-menu-item">
//                 <Link to="/">
//                   {" "}
//                   <FaHome className="humburger-menu-icons" />
//                   Home
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Profile">
//                   <CgProfile className="humburger-menu-icons" /> Profile
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Address">
//                   <FaMapMarkedAlt className="humburger-menu-icons" /> Address
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Inbox">
//                   <MdOutlineNotificationsActive className="humburger-menu-icons" />{" "}
//                   Inbox
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Wallet">
//                   <FaWallet className="humburger-menu-icons" /> Wallet
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Support">
//                   <BiSupport className="humburger-menu-icons" /> Support &
//                   Feedback
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Privacy">
//                   <MdPrivacyTip className="humburger-menu-icons" /> Privacy
//                   Policy
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Terms">
//                   <SiIterm2 className="humburger-menu-icons" /> Terms & Condition
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/About-Us">
//                   <IoIosPeople className="humburger-menu-icons" /> About Us
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/Delete">
//                   {" "}
//                   <MdDelete className="humburger-menu-icons" />
//                   Delete Account
//                 </Link>
//               </li>
//               <li className="navbar-menu-item">
//                 <Link to="/">
//                   <IoIosLogOut className="humburger-menu-icons" /> Logout
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <img className="logo-kabsah navbar-logo" src={logo} alt="" />
//         <div className="navbar-cart">
//           <div className="sdsd">{totalCount}</div>
//           <Link to="/Cart" className="CartItem">
//             <MdShoppingCart className="navbar-cart-icons" />
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Index.css";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "../Images/Profile.png";
import logo from "../Images/WhatsApp Image 2023-05-03 at 2.10.31 PM.jpeg";
import { useSelector } from "react-redux";
import { cartDetails } from "../Store/slices/cartSlice";
import {
  MdDelete,
  MdOutlineNotificationsActive,
  MdPrivacyTip,
  MdShoppingCart,
} from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FaHome, FaMapMarkedAlt, FaStore, FaWallet } from "react-icons/fa";
import { SiIterm2 } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show); // Toggle the value of 'show'
  const { totalCount } = useSelector(cartDetails);
  const ProfileName=localStorage.getItem('f_name');
  const ProfileEmail=localStorage.getItem('Email');
  const ProfilePoint=localStorage.getItem('Point');
  return (
    <>
      <nav className={`navbar ${show ? "show-hamburger" : ""}`}>
        <Container>
          <div className="left-section">
            {/* <div className="logo"> */}
            <img className="logo-navbar-kabsah" src={logo} alt="" />
            {/* </div> */}
            <ul className="nav-links">
              <li>
                <Link className="hamburger-menu-style" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hamburger-menu-style" to="">
                  Orders
                </Link>
              </li>

              <li>
                <Link className="hamburger-menu-style" to="">
                  Favourites
                </Link>{" "}
              </li>

              <li>
                <Link className="hamburger-menu-style" to="">
                  Rewards
                </Link>
              </li>
              <li>
                <Link className="hamburger-menu-style" to="">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="sdsd">{totalCount}</div>
            <div className="cart-icon">
              {" "}
              <Link className="humburger-menu-icons" to="/Cart">
                <MdShoppingCart className="navbar-cart-icons" />
              </Link>
            </div>
            <div className="hamburger-menu" onClick={handleShow}>
              ☰
            </div>
          </div>

          {show && (
            <>
              <div className="hamburger-menu-content" onClick={handleShow}>
                <div className="hamburger-menu-content-login text-center">
                  <div className="hamburger-menu-content-login-inner-div">
                    <img
                      className="humburger-menu-content-profile"
                      src={Profile}
                      alt=""
                    />
                    <div>
                      <h6>{ProfileName}</h6>
                    </div>
                    <div>{ProfileEmail}</div>
                    <div>Point: {ProfilePoint}</div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <ul className="hamburger-menu-links">
                  <li>
                    <Link to="/" className="hamburger-menu-style">
                      <FaHome className="humburger-menu-icons" />
                    </Link>
                    Home
                  </li>
                  <li>
                    {" "}
                    <Link to="/Profile" className="hamburger-menu-style">
                      <CgProfile className="humburger-menu-icons" /> Profile
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Address" className="hamburger-menu-style">
                      <FaMapMarkedAlt className="humburger-menu-icons" />{" "}
                      Address
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/choosestore" className="hamburger-menu-style">
                      <FaStore className="humburger-menu-icons" />{" "}
                      Choose Store
                    </Link>
                  </li>
                  <li>
                    <Link to="/Inbox" className="hamburger-menu-style">
                      <MdOutlineNotificationsActive className="humburger-menu-icons" />{" "}
                      Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="/Wallet" className="hamburger-menu-style">
                      <FaWallet className="humburger-menu-icons" /> Wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="/Support" className="hamburger-menu-style">
                      {" "}
                      <BiSupport className="humburger-menu-icons" /> Support &
                      Feedback
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Privacy" className="hamburger-menu-style">
                      <MdPrivacyTip className="humburger-menu-icons" /> Privacy
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Terms" className="hamburger-menu-style">
                      <SiIterm2 className="humburger-menu-icons" /> Terms &
                      Condition{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/About-Us" className="hamburger-menu-style">
                      <IoIosPeople className="humburger-menu-icons" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Delete" className="hamburger-menu-style">
                      <MdDelete className="humburger-menu-icons" />
                      Delete Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hamburger-menu-style">
                      {" "}
                      <IoIosLogOut className="humburger-menu-icons" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
