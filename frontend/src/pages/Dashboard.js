// src/pages/Dashboard.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Chatbot from "../components/Chatbot";
import "./Dashboard.css";

const services = [
  { name: "Plumbing", image: "https://cdn1.vectorstock.com/i/1000x1000/73/05/sanitary-engineering-plumber-at-plumbing-work-vector-10237305.jpg" },
  { name: "Electrician", image: "https://i.pinimg.com/736x/0f/db/ce/0fdbce72cbb55ba6c87495876d70f37e.jpg" },
  { name: "House Cleaning", image: "https://cdn5.vectorstock.com/i/1000x1000/44/69/man-male-cleaning-service-house-office-cleaner-vector-8294469.jpg" },
  { name: "Babysitting", image: "https://cdn.vectorstock.com/i/1000v/18/73/babysitter-cartoon-vector-44781873.jpg" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container min-h-screen bg-gradient-to-r from-orange-500 to-indigo-600">
      <Header />
      <main className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Craft Connect</h1>
        <p className="mt-4 text-gray-600">Find reliable professionals for all your daily needs.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">View Services</Link>
          <Link to="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">Join as a Provider</Link>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">Popular Services</h2>
          <div className="grid-container">
            {services.map((service, index) => (
              <Link to={`/service/${index + 1}`} key={index} className="grid-item">
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Card title="Chatbot">
        <Chatbot />
      </Card>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
