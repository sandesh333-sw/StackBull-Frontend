import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftImage";
import RightSection from "./RightImage";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection 
      imageUrl='media/images/kite.png'
      productName='Kite' 
      productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
      tryDemo=''
      learnMore=''
      googlePlay=''
      appStore=''
      />
      <RightSection 
      imageUrl='media/images/kite.png'
      productName='Console' 
      productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
      learnMore=''
      />
      <LeftSection 
      imageUrl='media/images/console.png'
      productName='Coin' 
      productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
      tryDemo=''
      learnMore=''
      googlePlay=''
      appStore=''
      />
      <RightSection 
      imageUrl='media/images/kiteconnect.png'
      productName='Kite Connect API' 
      productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
      learnMore=''
      />
      <LeftSection 
      imageUrl='media/images/varsity.png'
      productName='Varsity' 
      productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
      tryDemo=''
      learnMore=''
      googlePlay=''
      appStore=''
      />
    </>
  );
}

export default ProductPage;
