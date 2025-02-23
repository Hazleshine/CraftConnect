import React, { useState } from "react";
import "./CareerGuidance.css";


const CareerGuidance = () => {
  const [topRoles, setTopRoles] = useState([]);
  const [skillGap, setSkillGap] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  const handleTopRolesClick = async () => {
    const userId = "USER_ID"; // Replace with actual user ID
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/career-guidance/${userId}`);
    const data = await response.json();

    setTopRoles(data.topRoles);
    setSkillGap(data.skillGap);
    setRecommendedCourses(data.recommendedCourses);
  };

  return (
    <div className="career-guidance">
      <h2>Career Guidance</h2>
      <div className="cards">
        <div className="card" onClick={handleTopRolesClick}>Top Roles for You</div>
        <div className="card">Skill Gap Analysis</div>
        <div className="card">Recommended Courses</div>
      </div>
      {topRoles.length > 0 && (
        <div className="results">
          <h3>Top Roles for You</h3>
          <ul>
            {topRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      )}
      {skillGap.length > 0 && (
        <div className="results">
          <h3>Skill Gap Analysis</h3>
          <ul>
            {skillGap.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      {recommendedCourses.length > 0 && (
        <div className="results">
          <h3>Recommended Courses</h3>
          <ul>
            {recommendedCourses.map((course, index) => (
              <li key={index}>
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;