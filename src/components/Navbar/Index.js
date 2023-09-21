import React from "react";
import "./Index.css";
import Home from "../Home/Index";
import Deals from "../Deals/Index";
import SpecialOffers from "../Special-Offers/Index";
import Apitizer from "../Apitizer/Index";
import Sandwich from "../Sandwich/Index";
import Breakfast from "../Breakfast/Index";
import LunchDinner from "../Lunch-Dinner/Index";
import IndianCusian from "../Indian-Cusian/Index";
import SeaFood from "../Sea-Food/Index";
import Grilled from "../Grilled/Index";
import Desert from "../Desert/Index";
import Humburger from "../Humburger-Menu/Index";
import PopularItem from "../Popular-Item/Index";
import Sliders from "../Slider/Index";
import Drinks from "../Drinks/Index";
import Foot from "../Foot/Index";
const index = () => {
  return (
    <>
      {/* This is the Humburger-menu-main-navbar */}
      <Humburger />
      <br />
      <br />
      <br />
      <div className="pt-3" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <Home />
        {/* This is for the Slider */}
        <Sliders />

        {/* This is for the popular-items */}
        <PopularItem />

        {/* This isfor the Deals */}
        <Deals />
        {/* This is for the Special-offer */}
        <SpecialOffers />

        {/* This is for the Apitizer */}
        <Apitizer />

        {/* This is for the Sandwich */}
        <Breakfast />

        {/* This is for the Lunch Dinner */}
        <LunchDinner />

        {/* This is for the Indian Cuisian */}
        <IndianCusian />

        {/* This is for the Grilled */}
        <Grilled />

        {/* This is for the Sea-food */}
        <SeaFood />

        {/* This is for the Breakfast */}
        <Sandwich />

        {/* This is for the Desert */}
        <Desert />

        {/* This is for the Drinks */}
        <Drinks />
        {/* This is the Footer */}
        <Foot />
      </div>
    </>
  );
};

export default index;
