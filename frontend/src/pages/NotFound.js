import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link to="/dashboard" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;