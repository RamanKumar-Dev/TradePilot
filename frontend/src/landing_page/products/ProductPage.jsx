import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <h1>This is Product Page</h1>
      <Hero />
      <RightSection />
      <LeftSection />
      <Universe />
      <Footer />
    </div>
  );
}

export default ProductPage;
