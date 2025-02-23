import React, { useState } from "react";
import { apiRequest } from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  return (
    <>
      <Header />
      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", background: "#fff", boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>User Details</h2>
        <form>
          {[
            { label: "User ID", value: userId, setValue: setUserId, type: "text" },
            { label: "Email", value: email, setValue: setEmail, type: "email" },
            { label: "Password", value: password, setValue: setPassword, type: "password" },
            { label: "Name", value: name, setValue: setName, type: "text" },
            { label: "Career Goals", value: careerGoals, setValue: setCareerGoals, type: "text" },
            { label: "Past Education", value: pastEducation, setValue: setPastEducation, type: "text" },
            { label: "Skills (comma-separated)", value: skills.join(","), setValue: (e) => setSkills(e.target.value.split(",")), type: "text" },
            { label: "Goals (comma-separated)", value: goals.join(","), setValue: (e) => setGoals(e.target.value.split(",")), type: "text" }
          ].map((field, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "500", marginBottom: "5px" }}>{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setValue(e)}
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
              />
            </div>
          ))}
          <button 
            type="button" 
            onClick={handleSaveDetails} 
            style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", fontSize: "18px", cursor: "pointer" }}>
            Save Details
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserDetails;
