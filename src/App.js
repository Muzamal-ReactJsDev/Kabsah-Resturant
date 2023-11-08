import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import Home from "./components/Home/Index";
import Profile from "../src/components/Profile/Index";
import Support from "./components/Support-Feedback/Index";
import Address from "../src/components/Address/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/Inbox/Index";
import Privacy from "./components/Privacy-Policy/Index";
import About from "../src/components/About-us/Index";
import Terms from "../src/components/Terms-Condition/Index";
import Delete2 from "./components/Delete2/Index";
import Cart from "./components/Cart/Index";
import CheckOut from "./components/Cart/Check-out/Index";
import Wallet from "./components/Wallet/Index";
import GoogleMap from "./components/Address/Google-map/Index";
// import Addcard from "./components/Wallet/AddCardData/Index";
import Data from "./components/Wallet/DataCard/Index";
import Login from "./components/LoginDetail/Login/Index";
import SignUp from "./components/LoginDetail/Signup/Index";
import ForgotPass from "./components/LoginDetail/ForgotPassword/Index";
import Verification from "./components/LoginDetail/Verification/Index";
import React from "react";
import Foot from "./components/Foot/Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Practice/>} /> */}
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPass />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Delete" element={<Delete2 />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart/CheckOut" element={<CheckOut />} />
          
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Address/GoogleMap" element={<GoogleMap />} />
          {/* <Route path="/Wallet/AddCardData" element={<Addcard />} /> */}
          <Route path="/Wallet/Data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
