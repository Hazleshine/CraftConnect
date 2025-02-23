import React, { useState } from "react";
import { apiRequest } from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import CareerGuidance from "../components/CareerGuidance";
// import JobMarketAnalytics from "../components/JobMarketAnalytics";
// import EmotionalIntelligenceHub from "../components/EmotionalIntelligenceHub";

const UserDetails = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [careerGoals, setCareerGoals] = useState("");
  const [pastEducation, setPastEducation] = useState("");
  const [skills, setSkills] = useState([]);
  const [goals, setGoals] = useState([]);

  const handleSaveDetails = async () => {
    try {
      const data = await apiRequest("/api/user-details/save-details", "POST", {
        userId,
        email,
        password,
        profile: {
          name,
          careerGoals,
          pastEducation,
          goals,
        },
      });
      alert(data.message);
    } catch (error) {
      alert("Error saving details: " + error.message);
    }
  };

  const containerStyle = {
    // maxWidth: "400px",
    width: "100%",
    background: "#fff",
    // padding: "25px 30px",
    // borderRadius: "5px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
    // margin: "20px auto",
  };

  const titleStyle = {
    fontSize: "25px",
    fontWeight: "500",
    position: "relative",
    marginBottom: "20px",
  };

  const userDetailsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "20px 0 12px 0",
  };

  const inputBoxStyle = {
    marginBottom: "15px",
    width: "calc(100% / 2 - 20px)",
  };

  const detailsStyle = {
    display: "block",
    fontWeight: "500",
    marginBottom: "5px",
  };

  const inputStyle = {
    height: "45px",
    width: "100%",
    outline: "none",
    fontSize: "16px",
    borderRadius: "5px",
    paddingLeft: "15px",
    border: "1px solid #ccc",
    borderBottomWidth: "2px",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    height: "45px",
    margin: "35px 0",
  };

  const buttonInputStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background: "linear-gradient(135deg, #71b7e6, #9b59b6)",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={titleStyle}>User Details</div>
      <div className="content">
        <form>
          <div style={userDetailsStyle}>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>User ID</span>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Career Goals</span>
              <input
                type="text"
                value={careerGoals}
                onChange={(e) => setCareerGoals(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Past Education</span>
              <input
                type="text"
                value={pastEducation}
                onChange={(e) => setPastEducation(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Skills</span>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value.split(","))}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputBoxStyle}>
              <span style={detailsStyle}>Goals</span>
              <input
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value.split(","))}
                required
                style={inputStyle}
              />
            </div>
          </div>
          <div style={buttonStyle}>
            <input type="button" value="Save Details" onClick={handleSaveDetails} style={buttonInputStyle} />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetails;