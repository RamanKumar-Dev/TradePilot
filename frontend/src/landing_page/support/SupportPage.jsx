import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Ticket from "./Ticket";
import Footer from "../Footer";

function SupportPage() {
  return (
    <div>
      <Navbar />
      <h1>This is Support Page</h1>
      <Hero />
      <Ticket />
      <Footer />
    </div>
  );
}

export default SupportPage;
