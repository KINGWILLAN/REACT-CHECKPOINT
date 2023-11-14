import React from "react";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Cards />
      </div>
    </>
  );
};

export default App;
