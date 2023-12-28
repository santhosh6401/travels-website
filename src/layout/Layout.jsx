import "./Layout.css";
import Home from "../sections/home/Home";
import Footer from "../sections/footer/Footer";
import Services from "../sections/services/Services";
import Why from "../sections/why/Why";
import Testimonials from "../sections/testimonials/Testimonials";
import Contact from "../sections/contact/Contact";
import Vehicle from "../sections/vehicle/Vehicle";
const Layout = () => {
  return (
    <div className="background">
      <Home />

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
