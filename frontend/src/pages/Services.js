import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Mocking service data for now
    const serviceData = [
      { id: 1, name: "Plumbing", description: "Expert plumbing services.", price: "$50/hr" },
      { id: 2, name: "Electrician", description: "Professional electrical work.", price: "$60/hr" },
      { id: 3, name: "House Cleaning", description: "Reliable home cleaning services.", price: "$40/hr" },
      { id: 4, name: "Babysitting", description: "Experienced babysitters.", price: "$20/hr" },
    ];
    setServices(serviceData);
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="mt-2 font-bold">Price: {service.price}</p>
              <Link
                to={`/service/${service.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
