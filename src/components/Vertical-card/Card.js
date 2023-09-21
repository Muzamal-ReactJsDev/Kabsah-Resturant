import React from "react";
import VerticalCard from "./Index";

const App = () => {
  return (
    <div>
      <h1>Vertical Cards</h1>
      <div>
        <VerticalCard
          image="image1.jpg"
          text="Card 1"
          icon1="icon1-class"
          icon2="icon2-class"
        />
        <VerticalCard
          image="image2.jpg"
          text="Card 2"
          icon1="icon1-class"
          icon2="icon2-class"
        />
      </div>
    </div>
  );
};

export default App;
