import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import PageNotFound from "./landing_page/PageNotFound";
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
