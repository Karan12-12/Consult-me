import React from "react";
import { useRef } from "react";
import "./About.css";
import { Icon } from "@iconify/react";

const About = () => {
  const divRef = useRef(null);
  function handleHover() {
    const divE = divRef.current;
    divE.classList.add("active");
  }
  function handleOut() {
    const divElement = divRef.current;

    // Remove the class from the classList
    divElement.classList.remove("active");
  }
  return (
    <div
      className="container-fluid overflow-hidden my-5 border bg-light shadow-lg rounded-3 about"
      id="about"
    >
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img
              className="img-fluid"
              src=" https://img.freepik.com/premium-photo/hospital-profession-people-medicine-concept-group-happy-doctors-hospital_380164-96293.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">WHY CHOOSE US?</h1>
            <p className="fs-5  ">
              We bring healthcare to your convenience, offering a comprehensive
              range of on-demand medical services tailored to your needs. Our
              platform allows you to connect with experienced online doctors who
              provide expert medical advice, issue online prescriptions, and
              offer quick refills whenever you require them.
            </p>
          </div>
        </div>
      </div>
      <section className="disease-card">
        <section
          ref={divRef}
          className="section "
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          <Icon
            icon="bi:heart-pulse-fill"
            color="#a62e11"
            hFlip={true}
            width="32"
            height="32"
            className="Icon"
          />

          <h2>Heart Disease</h2>
          <p className="text-card">
            Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life.
          </p>
        </section>

        <section
          ref={divRef}
          className="section "
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          <Icon
            icon="medical-icon:i-dental"
            color="#a62e11"
            width="32"
            height="32"
            hFlip={true}
            className="Icon"
          />
          <h2>Dental Care</h2>
          <p className="text-card">
            Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments.
          </p>
        </section>

        <section
          ref={divRef}
          className="section "
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          <Icon
            icon="fa-solid:ambulance"
            color="#a62e11"
            width="32"
            height="32"
            hFlip={true}
            className="Icon"
          />
          <h2>Emergency Care</h2>
          <p className="text-card">
            Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care.
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
