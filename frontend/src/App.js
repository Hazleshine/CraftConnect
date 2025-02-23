import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import CareerGuidance from "./components/CareerGuidance";
import JobMarketAnalytics from "./components/JobMarketAnalytics";
import EmotionalIntelligenceHub from "./components/EmotionalIntelligenceHub";
import ProtectedRoute from './components/ProtectedRoute';
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/career-guidance" element={<ProtectedRoute><CareerGuidance /></ProtectedRoute>} />
          <Route path="/emotional-intelligence-hub" element={<ProtectedRoute><EmotionalIntelligenceHub /></ProtectedRoute>} />
          <Route path="/job-market-analytics" element={<ProtectedRoute><JobMarketAnalytics /></ProtectedRoute>} />
          <Route path="/user-details" element={<ProtectedRoute><UserDetails /></ProtectedRoute>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;