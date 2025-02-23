import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      setError("All fields are required!");
      return;
    }
    console.log("Booking Confirmed:", { serviceId, ...formData });
    navigate("/confirmation");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Book a Service</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="w-full p-2 border rounded mb-3"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;