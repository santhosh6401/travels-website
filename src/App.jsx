import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Why from "./sections/why/Why";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";
import Booking from "./sections/booking/Booking";
import Navbar from "./sections/navbar/Navbar";
import NotFound from "./sections/notfound/NotFound";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<Why />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
