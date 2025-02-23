// src/pages/Dashboard.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Chatbot from "../components/Chatbot";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ background: 'linear-gradient(135deg, #cf5d41, #6C63FF)' }}>
      <Header />
      <main>
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold">Welcome to Craft Connect</h1>
        <p className="mt-4 text-gray-600">Find reliable professionals for all your daily needs.</p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/services" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Services</Link>
          <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Join as a Provider</Link>
        </div>

        <div className="mt-8" >
          <h2 className="text-2xl font-semibold">Popular Services</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            <li className="p-4 border rounded-lg shadow-sm">Plumbing</li>
            <li className="p-4 border rounded-lg shadow-sm">Electrician</li>
            <li className="p-4 border rounded-lg shadow-sm">House Cleaning</li>
            <li className="p-4 border rounded-lg shadow-sm">Babysitting</li>
          </ul>
        </div>
      </div>
        {/* <CareerGuidance />
        <JobMarketAnalytics />
        <EmotionalIntelligenceHub /> */}
      </main>
      <Card title="Chatbot">
          <Chatbot />
      </Card>
      <Footer />
    </div>
  );
};

export default Dashboard;