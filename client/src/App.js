import React from "react";
//Header component
import Header from "./components/Header";
import Carousal from "./components/Carousal";
import Button from "./components/Button";
import Information from "./components/Information";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Carousal />
      <Button />
      <Information />
      <Footer />
    </div>
  );
};

export default App;
