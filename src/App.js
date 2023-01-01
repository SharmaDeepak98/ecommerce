import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Products from "./page/Products";
import PageNotFound from "./page/PageNotFound";
import About from "./page/About";
import Account from "./page/Account";
import Contact from "./page/Contact";
import Cart from "./page/cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
