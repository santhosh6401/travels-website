import "./Layout.css";
import React from "react";
import Home from "../sections/home/Home";
import Navbar from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";
import Services from "../sections/services/Services";
import Why from "../sections/why/Why";
import Testimonials from "../sections/testimonials/Testimonials";
import Contact from "../sections/contact/Contact";
import Vehicle from "../sections/vehicle/Vehicle";
import Booking from "../sections/booking/Booking";
const Layout = () => {
  return (
    <div className="background">
      <Navbar />

      <Home />
      
      {/* <Booking/> */}

      <Why />

      <Services />

      <Vehicle />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
};

export default Layout;
