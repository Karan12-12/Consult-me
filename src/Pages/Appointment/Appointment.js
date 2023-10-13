import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Appointment.css";
import { Icon } from "@iconify/react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    problemType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Appointment booked successfully!");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      problemType: "",
    });
  };

  return (
    <div className="appointment-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
        limit={5}
        rtl={false}
        className="custom-toast-container"
      />
      <div className="nav-div">
        <a href="/">
          <span className="go-back">
            <Icon
              icon="carbon:home"
              color="white"
              width="35"
              height="35"
              style={{ marginTop: 20 }}
            />
          </span>
        </a>
        <img
          src="https://consultme.bg/wp-content/uploads/2018/11/Original_png-1-e1542727565346.png"
          height="70px"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <h2>MAKE AN APPOINTMENT</h2>
        <div className="form">
          <section className="left-section">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </section>
          <section className="right-section">
            <div className="form-group">
              <label htmlFor="symptoms">Symptoms:</label>
              <input
                type="text"
                id="symptoms"
                name="Symptoms"
                value={formData.Symptoms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="departments">Departments:</label>
              <select
                id="departments"
                name="departments"
                value={formData.Departments}
                onChange={handleChange}
                required
              >
                <option value="">Select Departments</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Dermetologist">Dermetologist</option>
                <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Pediatric surgery">Pediatric surgery</option>
                <option value="Vascular surgery">Vascular surgeryy</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.Gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="number"
                id="phone-number"
                name="number"
                value={formData.PhoneNumner}
                onChange={handleChange}
                required
              />
            </div>
          </section>
        </div>
        <button type="submit">Make an appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
