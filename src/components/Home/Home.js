import React from "react";
import Carousel from "../../Pages/Carousel/Carousel.js";
import About from "../../Pages/About/About.js";
import Contact from "../../Pages/Contacts/Contact.js";
import Doctors from "../../Pages/Doctors/Doctors.js";
import NavigationBar from "../Navbar/Navbar.js";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop.js";
import doctors from "../../Pages/Doctors/DoctorsList.js";

function Home() {
  return (
    <div className="home-section">
      <NavigationBar />
      <Carousel />
      <About />
      <Doctors doctors={doctors} />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
