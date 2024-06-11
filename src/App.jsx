import React from "react";
import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Nav />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="products">
        <PopularProducts />
      </Element>
      <Element name="super-quality">
        <SuperQuality />
      </Element>
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Element name="contact">
        <Subscribe />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
