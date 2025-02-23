const User = require("../models/User");

const getCareerGuidanceData = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch or generate top roles, skill gap, and recommended courses based on user's data
    const topRoles = ["Software Engineer", "Data Scientist", "Product Manager"];
    const skillGap = ["Python", "Machine Learning", "Project Management"];
    const recommendedCourses = [
      { name: "Python for Everybody", link: "https://www.coursera.org/specializations/python" },
      { name: "Machine Learning", link: "https://www.coursera.org/learn/machine-learning" },
      { name: "Project Management", link: "https://www.coursera.org/specializations/project-management" },
    ];

    res.status(200).json({ topRoles, skillGap, recommendedCourses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCareerGuidanceData };