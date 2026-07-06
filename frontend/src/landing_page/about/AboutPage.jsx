import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Team from "./Team";
import Footer from "../Footer";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1>This is About Page</h1>
      <Hero />
      <Team />
      <Footer />
    </div>
  );
}

export default AboutPage;
