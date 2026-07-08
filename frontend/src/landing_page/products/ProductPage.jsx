import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import kite from "../../assets/images/kite.png";
import console from "../../assets/images/console.png";
import coin from "../../assets/images/coin.png";
import kiteconnect from "../../assets/images/kiteconnect.png";

function ProductPage() {
  return (
    <div>
      <Hero />
      <RightSection
        productImg={kite}
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <LeftSection
        productImg={console}
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
      />
      <RightSection
        productImg={coin}
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
      />
      <LeftSection
        productImg={kiteconnect}
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. "
      />
      <RightSection
        productImg={kite}
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
      />
      <Universe />
    </div>
  );
}

export default ProductPage;
