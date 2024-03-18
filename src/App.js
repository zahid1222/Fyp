import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Pages/>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
