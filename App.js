import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Cart/Card";
import Header from "./Layout/Header";
import Products from "./products/Products";
import CartProvider from "./store/CartProvider ";
import Home from "./Layout/Home";
// import Story from "./Layout/Story";
import About from "./Layout/About";
import { Story } from "./Layout/Story";

function App() {
  const [showCard, Setcard] = useState(false);

  const ToggleCard = () => {
    Setcard(!showCard);
  };

  return (
    <>
      {showCard && <Card Data={ToggleCard} />}
      <Header Toggle={ToggleCard} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
